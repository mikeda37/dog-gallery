import { useEffect, useState } from 'react'
import { fetchImageUrls, fetchImage } from './api'
import './App.scss'
import './lds-spinner.css'

/* loading component */
const LOADING_COMPONENT = (
  <div className='lds-spinner'>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>
)

/**
 * Header
 * @returns components
 */
const Header = () => {
  return (
    <div>
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Cute Dog Pictures</h1>
          </div>
        </div>
      </header>
    </div>
  )
}

/**
 * Loading
 * @returns components
 */
const Loading = () => {
  return LOADING_COMPONENT
}

/**
 * Image
 * @param {props} props 
 * @returns components
 */
const Image = (props) => {
  const [url, setUrl] = useState(null)
  
  useEffect(() => {
    fetchImage(props.src).then(url => {
      setUrl(url)
    })
  }, [])

  if (url === null) {
    return <Loading />
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={url} alt="cute dog" />
        </figure>
      </div>
    </div>
  )
}

/**
 * Gallery
 * @param {props} props 
 * @returns components
 */
const Gallery = (props) => {
  const { urls } = props
  if (urls === null) {
    return <Loading />
  }

  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3 image-wrap">
            <Image src={url} />
          </div>
        )
      })}
    </div>
  )
}

/**
 * Prev
 * @param {props} props 
 * @returns components
 */
const Prev = (props) => {
  const handleClick = () => {
    props.onClick()
  }
  return (
    <div>
      <button className="button is-dark" onClick={handleClick}>
        {'<'}
      </button>
    </div>
  )
}

/**
 * Select
 * @param {props} props 
 * @returns components
 */
const Select = (props) => {
  const handleChange = (event) => {
    props.onSelectChange(event.target.value)
  }
  return (
    <div className="select-wrap">
      <div className="select is-fullwidth">
        <select name="breed" defaultValue="affenpinscher" onChange={handleChange} ref={props._ref}>
          <option value="affenpinscher">affenpinscher</option>
          <option value="hound-afghan">afghan hound</option>
          <option value="african">african</option>
          <option value="airedale">airedale</option>
          <option value="akita">akita</option>
          <option value="terrier-american">american terrier</option>
          <option value="appenzeller">appenzeller</option>
          <option value="cattledog-australian">australian cattle dog</option>
          <option value="australian-shepherd">australian shepherd</option>
          <option value="terrier-australian">australian terrier</option>
          <option value="basenji">basenji</option>
          <option value="hound-basset">basset hound</option>
          <option value="beagle">beagle</option>
          <option value="terrier-bedlington">bedlington terrier</option>
          <option value="mountain-bernese">bernese mountain</option>
          <option value="frise-bichon">bichon frise</option>
          <option value="spaniel-blenheim">blenheim spaniel</option>
          <option value="hound-blood">blood hound</option>
          <option value="bluetick">blue tick</option>
          <option value="collie-border">border collie</option>
          <option value="terrier-border">border terrier</option>
          <option value="borzoi">borzoi</option>
          <option value="bulldog-boston">boston bulldog</option>
          <option value="bouvier">bouvier</option>
          <option value="boxer">boxer</option>
          <option value="brabancon">brabancon</option>
          <option value="briard">briard</option>
          <option value="spaniel-brittany">brittany spaniel</option>
          <option value="mastiff-bull">bull mastiff</option>
          <option value="terrier-cairn">cairn terrier</option>
          <option value="corgi-cardigan">cardigan corgi</option>
          <option value="ovcharka-caucasian">caucasian ovcharka</option>
          <option value="retriever-chesapeake">chesapeake retriever</option>
          <option value="chihuahua">chihuahua</option>
          <option value="chow">chow</option>
          <option value="clumber">clumber</option>
          <option value="cockapoo">cockapoo</option>
          <option value="spaniel-cocker">cocker spaniel</option>
          <option value="coonhound">coonhound</option>
          <option value="cotondetulear">cotondetulear</option>
          <option value="retriever-curly">curly retriever</option>
          <option value="dachshund">dachshund</option>
          <option value="dalmatian">dalmatian</option>
          <option value="terrier-dandie">dandie terrier</option>
          <option value="dhole">dhole</option>
          <option value="dingo">dingo</option>
          <option value="doberman">doberman</option>
          <option value="bulldog-english">english bulldog</option>
          <option value="hound-english">english hound</option>
          <option value="mastiff-english">english mastiff</option>
          <option value="setter-english">english setter</option>
          <option value="sheepdog-english">english sheepdog</option>
          <option value="springer-english">english springer</option>
          <option value="entlebucher">entlebucher</option>
          <option value="eskimo">eskimo</option>
          <option value="finnish-lapphund">finnish lapphund</option>
          <option value="retriever-flatcoated">flat coated retriever</option>
          <option value="terrier-fox">fox terrier</option>
          <option value="bulldog-french">french bulldog</option>
          <option value="pointer-germanlonghair">german longhair pointer</option>
          <option value="pointer-german">german pointer</option>
          <option value="germanshepherd">german shepherd</option>
          <option value="schnauzer-giant">giant schnauzer</option>
          <option value="retriever-golden">golden retriever</option>
          <option value="setter-gordon">gordon setter</option>
          <option value="dane-great">great dane</option>
          <option value="groenendael">groenendael</option>
          <option value="havanese">havanese</option>
          <option value="husky">husky</option>
          <option value="hound-ibizan">ibizan hound</option>
          <option value="setter-irish">irish setter</option>
          <option value="spaniel-irish">irish spaniel</option>
          <option value="terrier-irish">irish terrier</option>
          <option value="wolfhound-irish">irish wolfhound</option>
          <option value="greyhound-italian">italian greyhound</option>
          <option value="spaniel-japanese">japanese spaniel</option>
          <option value="keeshond">keeshond</option>
          <option value="kelpie">kelpie</option>
          <option value="terrier-kerryblue">kerry blue terrier</option>
          <option value="komondor">komondor</option>
          <option value="kuvasz">kuvasz</option>
          <option value="labradoodle">labradoodle</option>
          <option value="labrador">labrador</option>
          <option value="terrier-lakeland">lakeland terrier</option>
          <option value="leonberg">leonberg</option>
          <option value="lhasa">lhasa</option>
          <option value="malamute">malamute</option>
          <option value="malinois">malinois</option>
          <option value="maltese">maltese</option>
          <option value="mexicanhairless">mexican hairless</option>
          <option value="pinscher-miniature">miniature pinscher</option>
          <option value="poodle-miniature">miniature poodle</option>
          <option value="schnauzer-miniature">miniature schnauzer</option>
          <option value="mix">mix</option>
          <option value="newfoundland">newfoundland</option>
          <option value="terrier-norfolk">norfolk terrier</option>
          <option value="buhund-norwegian">norwegian buhund</option>
          <option value="elkhound-norwegian">norwegian elkhound</option>
          <option value="terrier-norwich">norwich terrier</option>
          <option value="otterhound">otter hound</option>
          <option value="papillon">papillon</option>
          <option value="terrier-patterdale">patter dale terrier</option>
          <option value="pekinese">pekinese</option>
          <option value="pembroke">pembroke</option>
          <option value="pitbull">pitbull</option>
          <option value="hound-plott">plott hound</option>
          <option value="pomeranian">pomeranian</option>
          <option value="pug">pug</option>
          <option value="puggle">puggle</option>
          <option value="pyrenees">pyrenees</option>
          <option value="redbone">redbone</option>
          <option value="ridgeback-rhodesian">rhodesian ridge back</option>
          <option value="rottweiler">rottweiler</option>
          <option value="terrier-russell">russell terrier</option>
          <option value="saluki">saluki</option>
          <option value="samoyed">samoyed</option>
          <option value="schipperke">schipperke</option>
          <option value="deerhound-scottish">scottish deerhound</option>
          <option value="terrier-scottish">scottish terrier</option>
          <option value="terrier-sealyham">sealyham terrier</option>
          <option value="sheepdog-shetland">shetland sheepdog</option>
          <option value="shiba">shiba</option>
          <option value="shihtzu">shihtzu</option>
          <option value="terrier-silky">silky terrier</option>
          <option value="waterdog-spanish">spanish water dog</option>
          <option value="stbernard">st. bernard</option>
          <option value="bullterrier-staffordshire">staffordshire bull terrier</option>
          <option value="poodle-standard">standard poodle</option>
          <option value="spaniel-sussex">sussex spaniel</option>
          <option value="mountain-swiss">swiss mountain</option>
          <option value="tervuren">tervuren</option>
          <option value="mastiff-tibetan">tibetan mastiff</option>
          <option value="terrier-tibetan">tibetan terrier</option>
          <option value="poodle-toy">toy poodle</option>
          <option value="terrier-toy">toy terrier</option>
          <option value="vizsla">vizsla</option>
          <option value="hound-walker">walker hound</option>
          <option value="weimaraner">weimaraner</option>
          <option value="spaniel-welsh">welsh spaniel</option>
          <option value="terrier-welsh">welsh terrier</option>
          <option value="terrier-westhighland">west highland terrier</option>
          <option value="terrier-wheaten">wheaten terrier</option>
          <option value="whippet">whippet</option>
          <option value="terrier-yorkshire">yorkshire terrier</option>
        </select>
      </div>
    </div>
  )
}

/**
 * Next
 * @param {props} props 
 * @returns components
 */
const Next = (props) => {
  const handleClick = () => {
    props.onClick()
  }
  return (
    <div>
      <button className="button is-dark" onClick={handleClick}>
        {'>'}
      </button>
    </div>
  )
}

/**
 * Change Pictures
 * @param {props} props 
 * @returns components
 */
const ChangePictures = (props) => {
  const handleClick = () => {
    props.onClick()
  }
  return (
    <div>
      <button className="button is-dark" onClick={handleClick}>
        Change Pictures
      </button>
    </div>
  )
}

/**
 * Main
 * @returns components
 */
const Main = () => {
  const [prevBreed, setBreed] = useState(null)
  const [urls, setUrls] = useState(null)
  
  useEffect(() => {
    reloadImages('affenpinscher')
  }, [])
  
  /**
   * change breed selection
   * @param {string} prevOrNext
   */
  const changeSelection = (prevOrNext) => {
    // change selection
    const select = document.querySelector('select[name="breed"]')
    const OPTION_LENGTH = select.length
    let currentIndex = select.selectedIndex + ((prevOrNext === 'prev') ? -1 : 1)
    currentIndex = (currentIndex === -1) ? OPTION_LENGTH - 1 : (currentIndex === OPTION_LENGTH) ? 0 : currentIndex
    select[currentIndex].setAttribute('selected', 'selected')
    select.selectedIndex = currentIndex
    
    // reload images
    const breed = select[currentIndex].getAttribute('value')
    reloadImages(breed)
  }
  
  /**
   * reload images
   * @param {string} breed breed of dog
   */
  const reloadImages = (breed) => {
    if (breed) {
      setBreed(breed)
    } else {
      breed = prevBreed
    }
  
    // fetch image urls
    fetchImageUrls(breed).then(urls => {
      setUrls(urls)
    })
  }

  return (
    <main>
      <section className="section select-breed">
        <div className="container is-flex is-flex-wrap-nowrap">
          <Prev onClick={() => changeSelection('prev')} />
          <Select onSelectChange={reloadImages} />
          <Next onClick={() => changeSelection('next')} />
        </div>
      </section>
      
      <section className="section change-image-button">
        <div className="container">
          <ChangePictures onClick={reloadImages} />
        </div>
      </section>

      <section className="section gallery">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Dog images are retrieved from <a href="https://dog.ceo/dog-api">Dog API</a>
        </p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
      </div>
    </footer>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
