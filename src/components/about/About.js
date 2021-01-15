// imr
// rfce
import React from 'react';
import "../../css/about.css";
import Contributors from './Contributors';

export function About() {
    
    return (
        <>
            <div className="about-header">
                <h1>About Stories</h1> 
            </div>
            <div className="about-container">
                <div className="about-image">
                    {/* <img src={AboutPhoto} alt="" className="" width="500" /> */}
                </div>
            
                <p>
                COVID-19 has put a spotlight on racial disparities and social injustices that plague America. The disease has affected Black and Latino Americans harder than any other race. Systemic racism in America has left people behind to work in blue collar jobs, to feed, clothe and serve a mostly privileged White America. They are the frontline workers that are forced to work each day for meager wages, little or no sick pay, and minimal access to healthcare. Here in San Diego, if you take a look at the zip codes hardest hit by COVID-19 and they comprise black and brown neighborhoods.
                </p>
                <p>
                Black, Latino Americans, and other people of color share a long history of exclusion based on their race. Anyone deemed as non-white has historically been excluded from being a non-citizen. Various laws since the birth of this country have worked to ensure the exclusion of people of color. The 1790 Uniform Rule of Naturalization said only free white men could become U.S. citizens.
                </p>
                <p>
                From the time of Cotton Mather’s proselytization of Africans as subhuman to advance their use as slaves in the new world, Blacks have been at a grave disadvantage. In the late 1800’s Mexicans and Natives were portrayed in newspaper clippings as savages and inferior to justify as whites explained why their land in the west should be taken and annexed to be a part of the U.S. territories. In 1848, the Treaty of Hidalgo ended the Mexican/American war and allowed Mexicans to become U.S. citizens after their land was taken, but they were still racialized. In the 1830s Jim Crow laws were enacted to enforce racial segregation between whites and blacks in the south, but it is rarely reported that Mexicans in the southwest were forced to follow Jim Crow laws, children were beaten for speaking Spanish in schools and hundreds were lynched, historians have found evidence that at least 597 Mexicans were lynched between 1848 - 1928. With such an intricate and shared history, it isn’t surprising that Black and Latinos face the same types racial injustices. Other people of color in San Diego like Native Americans, Filipino Americans and others also share the same turmoil. 
                </p>
                <p>
                Historians have long poured over newspapers to learn more about how people lived. This anthology would bring together the works of journalists from around San Diego and beyond, to explore and record this historic time as it unfolds. I would like to focus on the San Diego region and tell the unique stories faced by a border town.
                </p>
                <p>
                For me as an African American journalist and native San Diegan, this is a way for me to give back to my community by bringing world-class journalists to the table to tell stories and do the pieces that aren’t shortened by time or length.
                </p>
                <span className="from-lindsay">-Lindsay</span>
            </div>
            <div className="about-divider"> </div>
            <div className="people">
                <Contributors /> 
                {/* <section className="individual-cards">
                    <img src="https://i.imgur.com/bXzkn6l.jpg" alt="" className="individual-image" />
                    <span>
                    <h2>Samantha Jones</h2>
                    <p className="">Nulla anim velit culpa proident do commodo nostrud anim ex sunt ex. Est voluptate aliquip proident deserunt esse adipisicing veniam reprehenderit id enim. Nostrud elit officia minim aliquip aute veniam qui ad culpa officia velit.</p>
                    </span>
                </section>
                <div className="about-divider-2"> </div>
                <section className="individual-cards">
                    <img src="https://i.imgur.com/ybCJTTc.jpg" alt="" className="individual-image" />
                    <span>
                    <h2>David Jones</h2>
                    <p className="">Officia do laboris dolor non. Veniam enim ullamco do ut elit anim dolore id proident ut et sint laborum voluptate. Incididunt aliquip commodo quis cillum quis do culpa eiusmod laborum. Nostrud qui minim sit duis ex dolore. Amet irure do sint do sit ex ad. Eiusmod enim sunt consectetur pariatur aliqua.</p>
                    </span>
                </section>
                <div className="about-divider-2"> </div>
                
                <section className="individual-cards">
                    <img src="https://i.imgur.com/kYT6Irz.jpg" alt="" className="individual-image" />
                    <span>
                        <h2>Samantha Jones</h2>
                        <p className="">Eiusmod exercitation consequat amet cillum deserunt fugiat non ad elit enim labore do. Ad mollit proident nostrud quis nulla. Ut mollit nulla adipisicing labore voluptate ex esse dolore.</p>
                    </span>
                </section>
                <div className="about-divider-2"> </div>
                <section className="individual-cards">
                    <img src="https://i.imgur.com/sEjbsDi.jpg" alt="" className="individual-image" />
                    <span>
                        <h2>David Jones</h2>
                        <p className="">Minim et quis quis ea sunt eu in ex labore Lorem deserunt nisi sint amet. Ex et dolore officia cupidatat eiusmod et esse. Aliqua commodo quis ut ea est minim minim nostrud culpa tempor qui labore occaecat. In ex pariatur cillum cillum veniam consequat eu labore officia magna. Culpa sit nisi dolor commodo exercitation nisi irure sint exercitation amet.</p>
                    </span>
                </section>
                <div className="about-divider-2"> </div>
                <section className="individual-cards">
                    <img src="https://i.imgur.com/wPR2HaO.jpg" alt="" className="individual-image" />
                    <span>
                        <h2>Samantha Jones</h2>
                        <p className="">Ut labore laboris velit non ad incididunt do laborum magna aute culpa id eu. Voluptate voluptate ad ad eu tempor duis esse. Aute occaecat fugiat excepteur qui commodo aliqua eu. Reprehenderit ad quis cupidatat dolor sit incididunt consectetur. Excepteur id elit exercitation veniam veniam.</p>
                    </span>
                </section>
                <div className="about-divider-2"> </div>
                <section className="individual-cards">
                    <img src="https://i.imgur.com/COUkfn0.jpg" alt="" className="individual-image" />
                    <span>
                        <h2>Samantha Jones</h2>
                        <p className="">Tempor dolore anim eu non ex ut eiusmod enim culpa aliqua. Aute dolore aliquip sint velit ut ullamco culpa. Duis voluptate anim est et irure ex duis nisi fugiat velit commodo. Et sint irure quis dolor eiusmod. Fugiat non elit enim ad deserunt irure dolore Lorem ad laboris Lorem laboris qui do.</p>
                    </span>
                </section> */}
            </div>
        </>
    )
}

