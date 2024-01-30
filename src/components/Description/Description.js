import  descriptionSofa from "../../assests/images/description_sofa.svg";

import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="description_titles">
        <p>Descriptionn</p>
        <p>Additional Information</p>
      </div>
      <div className="description_text_container">
        <span>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </span>
        <span>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </span>
      </div>
      <div className="description_images_container">
        <img src={descriptionSofa}/>
        <img src={descriptionSofa}/>
      </div>
    </div>
  );
};

export default Description;
