import { useEffect, useState } from 'react'
import './App.css'

const moments = [
  ['01', 'Nhar li jiti ldniya', 'Had nhar trat a7ssan haja… rbi jab ro7k l3ziza ldniya.'],
  ['02', 'Dima m3aya', 'F zwina ou lkhayba, finma t7t ou finma tl3t, l9itk m3aya.'],
  ['03', 'Dar wa7da', 'Kan tmana lah ijm3na 3a2ila wa7da, ou nchufk dima fer7ana.'],
  ['04', 'Lyoum, ghdda, dima', 'Ana hna, ana m3ak… 7tal akher tnfissa, nched bin idik.'],
]

const letter = `Happy birthday mrati lghzala lbassla diali. Kan nbrik bzf. Had nhar 3ndo ahamiya bzf f hiyati, hit had nhar trat a7ssan haja: nhar li jiti fih ldniya, nhar li rbi jab ro7k l3ziza ldniya.

Nhar b nhar kan nzid nfker fik ou kan nzid n3ref belli vraiment kan nmout 3lik. Ma3arfach ch7al 9imtk 3ndi, ou 3merk tkhayli ch7al t9ed tswa nti. Hiya 3mri, kan ntfna 3lik bzf. Lah ikhelik liya, lah ib3dk 3la l'bla ou lbass, ou lah ijm3na 3a2ila wa7da. Brit nchufk dima fer7ana. 3arf kan n9l9k, kan n3ssbk ou ch7al mn haja… Fer7tk hiya fer7ti, bkiytk hiya bkiyti, ou t9li9tk hiya t9li9ti.

Nti hiya koul ma3ndi. Kan nbrik ou kan ntsta 3lik. Brit rbi irdi 3lik f الدنيا ou l'akhira; hadchi li baghi lik a 7iyati. Lkhir li nbrih lik kter mn li nbrih l rassi. Kan n7ma9 3lik. Ay haja ndirha kan nb9a ntfker fik. Ay haja dernaha, ay moment kna fih… twa7chtk a Malak ldaraja kbira.

Ntmana nkun ana awl wa7d sift lik had lmess. Khassk t3erfi belli rak kat3ni liya koulchi fhad الدنيا. 3awntini f zwina ou lkhayba; finma t7t l9itk, finma tl3t l9itk. Knti m3aya dima lw9t kaml, kherjtini mn ch7al mn haja knt fiha. Merci bzf, 7it nti sbab f ch7al mn haja li katdkhl fl 9lb ou fl 39l. Ch7al 9di n3awd lik, ms dakchi li derti makissalich ou 3mro i9ed it3awd bchi haja.

Ntmana tkuni fer7ana m3aya ou 3ajbk l7al. Pardon hit kan nghwt 3lik, rah ghir kan nbrik. Kan n3amlk ta3amol dial ay rajl kibri wa7da, kibriha met wlado ou mrato li i7et 3liha rass. Kan nbrik bzzf a Malak.

Nti 3mri bach 3aych. Nti 9lbi bach 7iy. Nti 3ini bach nchuf, dowiti liya tri9i; ou 39li bach kan nfker, ou riyti bach kan ntnafss. Kan n7ma9 3lik wlh. Wakha n3iya man nwssf, 3merk t9ed tkhayli ch7al kan n3ch9k. Kan n3amlk b7al bnti ou kter ou kter. Lhmdullah 3la ay chay2. Makerhtch koun ndir lik a7ssan 3id milad, ms lah ghalb. Nchallah irz9ni, ou d3i m3ana:

ياغني يا حميد يا مبدئ يامعيد يا رحيم يا ودود، اغنيني من حلالك عن حرامك وبفضلك عمن سواك

Hani m3ak a Malak, fl khayba ou zwina. Ana hna, ana m3ak, ana hna 7tal nhar nmout, 7tal akher tnfissa. M3ak nched bin idik. Wlh an7awl ma f jehdi bach n7mik mn ay haja li t9ed tderk ou mn ay haja t9ed trat lik. I'll do everything bach nkun m3ak ou man nkhelikch rassk tma; bach nwfr lik li t7taji, ra7tk, s7tk, ou nkhelik b aman. Kan n7awl ndir ma f jehdi.

Lhaja lwa7ida li mkheliyani n3ich fhad الدنيا hiya nti. Ou db weliti charfa 🙂 diali. 3arf anak atkuni t9l9ti mnin 9ritiha — ma kan ndl3k, hbubk ana. Ewa a lalla hbuba diali, lghzala, lbigissa, lfnikicha, lfonon, l9amar sahar, l bébé sghiwr… Brit tfer7i ou 3awdi tfer7i koul 3am ana m3ak a zin diali.

Nchallah 3id milad jay nkunu mjmo3in. Koun kant l possibilité koun jit bla matkuni 3arfa, hya tl9ayni 9dam khdmtk, ms lghalab lah. Lhmdullah. Kan nbrik, lah ijm3na yarbi 🤲🏼. Lah ikhelik l walidik ou khotk, ou s7tk ou 9lbk safi. Lah idik f tri9 l7assana ou tri9 lmosta9im. Lah inj7k f الدنيا ou fl akhira. Ti9i f lah, ou dima niya lmzyana. Lah ib3dk mn cher ou ay mkroh.

Kan nbrik a mrati. Kan ntsna nhar li n9ulk “mrati” 3la sonat Allah wa rassolih, ou nfer7 bik. Kan nbrik bzf. Kan nbri 3winatk chinowiyin lghzalin, nifk lghzal, btisamtk lfeena, 7nakek dial 3dan, 7jbank, chfark, fmk, 3n9ek, bchra dialk, toltk… koulk kathblini. 39li ou bali ou 9lbi m3ak dima.

25/8 🙂🙂 ou ana n3ass kan ntsta 3lik a Malak. Wlh bghit nfer7 bik m3ak. Kan nbrik. Chdi fiya, ti9i fiya, ou diri niya. Kouni 9wiya ou 7mi rassk b ta3t lah. Mwwa7. Kan ntfker nhar b nhar 3chto m3ak tal db, ou ba9i kan n3ich m3ak. Lah ikhelina l b3dna.

Happy birthday mrati… ou mamat wladi ❤️ Mwaaa7.`

function App() {
  const [opened, setOpened] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('no-scroll', !opened)
    return () => document.body.classList.remove('no-scroll')
  }, [opened])

  return <main className="experience">
    {!opened && <div className="gift-screen"><div className="gift-glow"/><p className="eyebrow">25 · 08 — POUR TOI, MON AMOUR</p><button className="gift" onClick={() => setOpened(true)} aria-label="Ouvrir ton cadeau"><span className="gift-lid"><i/></span><span className="gift-box"><i/></span></button><h1>J’ai quelque chose<br/><em>pour toi…</em></h1><button className="open-hint" onClick={() => setOpened(true)}>Touche pour ouvrir <span>↗</span></button></div>}

    <section className="hero">
      {[8,18,31,45,59,72,86,95].map((left,i)=><span className="floating-heart" key={left} style={{left:`${left}%`,animationDelay:`${i*-.8}s`,animationDuration:`${7+i%3}s`}}>♥</span>)}
      <nav><span className="mini-heart">♥</span><span>25 / 08</span><span className="nav-line"/><span>POUR MALAK</span></nav>
      <div className="hero-content"><p className="eyebrow">AUJOURD’HUI, ON CÉLÈBRE TOI</p><h1>Happy birthday,<br/><em>mrati lghzala.</em></h1><p className="hero-copy">Nhar li jiti fih ldniya, nhar li rbi jab<br/>ro7k l3ziza ldniya.</p><button className="round-button" onClick={() => document.querySelector('#story')?.scrollIntoView({behavior:'smooth'})}><span>Découvre<br/>ton histoire</span><b>↓</b></button></div>
      <div className="date-stamp"><small>NOTRE DATE</small><strong>25</strong><span>AOÛT</span></div>
    </section>

    <section className="story" id="story"><div className="section-heading"><p className="eyebrow">TOUT CE QUE TU ES POUR MOI</p><h2>Une histoire écrite<br/>avec le <em>cœur.</em></h2></div><div className="memory-grid">{moments.map(([n,title,text])=><article className="memory-card" key={n}><span>{n}</span><div className="memory-heart">♥</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="promise"><p className="eyebrow">MA PROMESSE</p><blockquote>“Ana hna. Ana m3ak.<br/>7tal akher tnfissa.”</blockquote><p>Fl khayba ou zwina, nched bin idik.</p><span className="signature">Dima dialk ♡</span></section>

    <section className="film-section"><div className="film-copy"><p className="eyebrow">UN PETIT FILM, RIEN QUE POUR TOI</p><h2>Nos moments.<br/><em>Notre histoire.</em></h2><p>Chaque seconde m3ak hiya souvenir kan khbih f 9lbi.</p></div><div className="film-frame"><video controls preload="metadata"><source src="/birthday-video.mp4" type="video/mp4"/></video><div className="film-placeholder"><span>▶</span><strong>Notre film</strong><small>Ajoute birthday-video.mp4 dans le dossier public</small></div><i className="corner tl"/><i className="corner br"/></div></section>

    <section className="letter-section"><p className="eyebrow">LES MOTS QUE MON CŒUR AVAIT À TE DIRE</p><h2>Une lettre pour <em>toi.</em></h2>{!letterOpen ? <button className="envelope" onClick={()=>setLetterOpen(true)}><span className="envelope-paper">Pour Malak <i>♥</i></span><span className="envelope-flap"/><b>Ouvre ma lettre</b></button> : <article className="love-letter"><button onClick={()=>setLetterOpen(false)} aria-label="Fermer la lettre">×</button><p className="letter-date">25 août · Le jour de mon Malak</p><h3>À mrati, mamat wladi…</h3><div className="letter-text">{letter}</div><footer>Kan nbrik, aujourd’hui et pour toujours.<strong>— Dima dialk ♥</strong></footer></article>}</section>

    <section className="finale"><span className="outline-heart">♡</span><p className="eyebrow">MON VŒU POUR TOI</p><h2>Lah ikhelina<br/><em>l’b3dna.</em></h2><p>Lah ykhelik liya, yfer7 9lbk, ou yjma3na<br/>f dar wa7da, dima.</p><div className="dua" dir="rtl">ياغني يا حميد يا مبدئ يامعيد يا رحيم يا ودود<br/>اغنيني من حلالك عن حرامك وبفضلك عمن سواك</div><div className="forever">HAPPY BIRTHDAY MRATI<strong>OU MAMAT WLADI</strong><span>♥</span></div></section>
  </main>
}
export default App
