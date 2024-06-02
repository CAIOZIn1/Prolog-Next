:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_json)).

:- http_handler(root(recomendacao), handle_recomendacao, []).

server(Port) :-
    http_server(http_dispatch, [port(Port)]).

% Definição de filmes com base em atributos
filme('Um Sonho de Liberdade', [drama], 1994, '18', [ingles]).
filme('O Poderoso Chefão', [crime, drama], 1972, '18', [ingles, italiano]).
filme('Batman: O Cavaleiro das Trevas', [acao, crime, drama], 2008, '12', [ingles]).
filme('Pulp Fiction: Tempo de Violência', [crime, drama], 1994, '18', [ingles, frances]).
filme('O Senhor dos Anéis: O Retorno do Rei', [acao, aventura, drama], 2003, '12', [ingles, sindarin]).
filme('Forrest Gump: O Contador de Histórias', [drama, romance], 1994, '12', [ingles]).
filme('A Origem', [acao, aventura, ficcao], 2010, '12', [ingles, japones, frances]).
filme('Clube da Luta', [drama], 1999, '18', [ingles]).
filme('Interstellar', [aventura, drama, ficcao], 2014, '12', [ingles]).
filme('Parasita', [comedia, drama, suspense], 2019, '16', [coreano]).
filme('Matrix', [acao, ficcao], 1999, '16', [ingles]).
filme('Cidade de Deus', [crime, drama], 2002, '18', [portugues]).
filme('A Vida é Bela', [comedia, drama, guerra], 1997, '10', [italiano]).
filme('Os Incríveis', [animacao, acao, aventura], 2004, 'Livre', [ingles]).
filme('Gladiador', [acao, aventura, drama], 2000, '16', [ingles]).

% Regras para recomendar filmes com base nas preferências
recomendar(Genero, Ano, Classificacao, Linguagem, Filme) :-
    filme(Filme, Generos, AnoLancamento, Class, Linguagens),
    member(Genero, Generos),
    AnoLancamento >= Ano,
    Class = Classificacao,
    member(Linguagem, Linguagens).

handle_recomendacao(Request) :-
    http_read_json(Request, JSONIn),
    _{genero:Genero, ano:Ano, classificacao:Classificacao, linguagem:Linguagem} :< JSONIn,
    findall(Filme, recomendar(Genero, Ano, Classificacao, Linguagem, Filme), Filmes),
    reply_json(_{recomendacoes:Filmes}).

:- initialization(server(8000)).
