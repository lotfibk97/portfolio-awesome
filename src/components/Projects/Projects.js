import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { Carousel } from 'react-responsive-carousel';



/*
function ScreenShotsButton (id){
  const dom_target = '#modal-'+id;
  return (
    <ExternalLinks href="#"  data-toggle="modal" data-target={dom_target}>ScreenShots</ExternalLinks>
  );
};

function ScreenShotsModal (id){
  const dom_id = 'modal-'+id;
  return (
    // modal html here but takes id + images list as param
  );
};
*/

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {

        const dom_id = "modal-"+p.id;
        const dom_target = "#modal-"+p.id;
        const carousel_id = "carousel-indicator-"+p.id;
        const carousel_target = "#carousel-indicator-"+p.id;
        
        return (
          <BlogCard key={i}>
            <Img src={p.image} />

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <Hr />

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
              <ExternalLinks href={p.source}>Source Code</ExternalLinks>
              <ExternalLinks href="#"  data-toggle="modal" data-target={dom_target}>ScreenShots</ExternalLinks>
            </UtilityList>
            
            {/*p.screens*/}

            <div class="modal fade" id={dom_id} tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-body">
          
                    <div
                        id={carousel_id}
                        class='carousel slide'
                        data-ride='carousel'
                        >
                      <ol class='carousel-indicators'>
                        {p.screens.map((s, j) => {
                          return (
                            <li
                              data-target={carousel_target}
                              data-slide-to={j}
                              class={j==0?'active':''}
                            ></li>
                          );
                        })}
                        {/*}
                        <li
                            data-target='#carouselExampleIndicators'
                            data-slide-to='0'
                            class='active'
                            ></li>
                        <li
                            data-target='#carouselExampleIndicators'
                            data-slide-to='1'
                            ></li>
                        <li
                            data-target='#carouselExampleIndicators'
                            data-slide-to='2'
                            ></li>
                        */}
                      </ol>
                      <div class='carousel-inner'>
                        {p.screens.map((s, j) => {
                          return (j==0?(
                            <div class='carousel-item active'>
                              <img class='img-size' src={s} alt='First slide' />
                            </div>
                          ):(
                            <div class='carousel-item'>
                              <img class='img-size' src={s} alt='First slide' />
                            </div>
                          ));
                        })}
                        {/*}
                        <div class='carousel-item'>
                          <img class='img-size' src='https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='Second slide' />
                        </div>
                        <div class='carousel-item'>
                          <img class='img-size' src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='Second slide' />
                        </div> */}
                      </div>
                      <a
                        class='carousel-control-prev'
                        href={carousel_target}
                        role='button'
                        data-slide='prev'
                        >
                        <span class='carousel-control-prev-icon'
                              aria-hidden='true'
                              ></span>
                        <span class='sr-only'>Previous</span>
                      </a>
                      <a
                        class='carousel-control-next'
                        href={carousel_target}
                        role='button'
                        data-slide='next'
                        >
                        <span
                              class='carousel-control-next-icon'
                              aria-hidden='true'
                              ></span>
                        <span class='sr-only'>Next</span>
                      </a>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;