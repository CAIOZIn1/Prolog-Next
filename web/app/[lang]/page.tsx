import Intro from "@/components/Intro";
import { Locale } from "@/config/i18n.config";

export default function Home({params}: {params: {lang: Locale}}) {
  return (
    <Intro params={params}/>
  );
}
