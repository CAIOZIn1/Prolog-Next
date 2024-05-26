:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_json)).

:- http_handler(root(recomendacao), handle_recomendacao, []).

server(Port) :-
    http_server(http_dispatch, [port(Port)]).

tecnologia(python, [iniciante, intermediario, avancado], [web, data_science, automacao], [funcional, oo], [windows, mac, linux]).
tecnologia(java, [intermediario, avancado], [web, mobile], [oo], [windows, mac, linux]).
tecnologia(javascript, [iniciante, intermediario, avancado], [web, mobile], [funcional, oo], [windows, mac, linux]).
tecnologia(C, [iniciante, intermediario, avancado], [desktop], [oo], [windows, mac, linux]).
tecnologia(C++, [iniciante, intermediario, avancado], [desktop], [oo], [windows, mac, linux]).
tecnologia(prolog, [iniciante, intermediario, avancado], [desktop, web], [oo], [windows, mac, linux]).
tecnologia(Go, [ intermediario, avancado], [desktop, web, mobile], [oo], [windows, mac, linux]).
tecnologia(swift, [iniciante, intermediario], [mobile], [oo], [mac]).

recomendar(Experiencia, Projeto, Preferencia, Plataforma, Tecnologia) :-
    tecnologia(Tecnologia, Exp, Proj, Pref, Plat),
    member(Experiencia, Exp),
    member(Projeto, Proj),
    member(Preferencia, Pref),
    member(Plataforma, Plat).

handle_recomendacao(Request) :-
    http_read_json(Request, JSONIn),
    _{experiencia:Experiencia, projeto:Projeto, preferencia:Preferencia, plataforma:Plataforma} :< JSONIn,
    findall(Tecnologia, recomendar(Experiencia, Projeto, Preferencia, Plataforma, Tecnologia), Tecnologias),
    reply_json(_{recomendacoes:Tecnologias}).

:- initialization(server(3008)).
