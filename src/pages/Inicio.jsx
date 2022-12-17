import { Header } from "../components/Header";
import styles from "../styles/pages/inicio.module.css"
import transImg from '../assets/trans.png'
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export function Inicio() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDuijQGafm4vvc4F0IxixHC5ukJtur7uXU",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return(
    <div className={styles.inicioContainer}>
      <div className={styles.inicio}>
        <Header titulo="TRANSforma Campina" descricao="O projeto Transforma Campina é um trabalho voluntário, que foi criado no intuito de ajudar pessoas que estão no inicio da transição de gênero e em situação de vulnerabilidade econômica. O projeto tem como proposito arrecadar doações de peças de roupas, calçados e acessórios. Fazendo com que os beneficiados consigam se vestir da forma como o qual se identificam, trazendo assim mais auto estima, apoio e auto confiança para essas pessoas nesse período." imagem={transImg}/>
      </div>
      <div>
        <h2 className={styles.titulo}>Assista ao Documentario: "Liberdade: A coragem de ser quem você é "</h2>
        <iframe className={styles.video} src="https://www.youtube.com/embed/_QlnZvI6e7w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <h3 className={styles.titulo}> Confira no mapa nossos pontos de coleta:</h3>
      <div className={styles.mapContainer}>
        <Map />
      </div>
    </div>
  )
}
function Map() {
  const crasPedregal = { lat: -7.22173363, lng: -35.91046839 };
  const crasMutirao = { lat:  -7.217595863, lng: -35.94649314 };
  const crasMalvinas = { lat: -7.236498897, lng: -35.93086123 };
  const crasCruzeiro = { lat: -7.2455537, lng: -35.8980176 };
  const crasTresIrmas = { lat: -7.2564814, lng: -35.9271491 };
  const crasLiberdade = { lat: -7.230080894, lng: -35.89146763 };
  const crasGloria = { lat: -7.2108037, lng: -35.8568299 };
  const crasPalmeira = { lat: -7.1984548, lng: -35.8944612 };
  const Crlgbt = { lat: -7.22587327225375, lng: -35.893009523287354 };

  return (
    <GoogleMap zoom={14} center={crasPedregal} mapContainerClassName="map-container">
      <MarkerF position={crasPedregal} label="Cras Pedregal"/>
      <MarkerF position={crasMutirao} label="Cras Mutirao"/>
      <MarkerF position={crasMalvinas} label="Cras Malvinas"/>
      <MarkerF position={crasCruzeiro} label="Cras Cruzeiro"/>
      <MarkerF position={crasTresIrmas} label="Cras Três irmãs"/>
      <MarkerF position={crasLiberdade} label="Cras Liberdade"/>
      <MarkerF position={crasGloria} label="Cras Gloria"/>
      <MarkerF position={crasPalmeira} label="Cras Palmeira"/>
      <MarkerF position={Crlgbt} label="Centro Estadual dos Direitos de LGBT"/>
    </GoogleMap>
  );
}