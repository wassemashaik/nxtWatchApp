import React, { useState } from 'react'

export default function VideoItemDetailCard() {


    renderVideoDetailsView = ()=> {
        if (videoDetails.length>=1){
            return (
                <>
                 <div className="job-item-container">
                <div className="first-part-container">
                  <div className="img-title-container">
                    <img
                      className="company-logo"
                      src={companyLogoUrl}
                      alt="job details company logo"
                    />
                    <div className="title-rating-container">
                      <h1 className="title-heading">{title}</h1>
                      <div className="star-rating-container">
                        <AiFillStar className="star-icon" />
                        <p className="rating-text">{rating}</p>
                      </div>
                    </div>
                  </div>
                  <div className="location-package-container">
                    <div className="location-job-type-container">
                      <div className="location-icon-location-container">
                        <MdLocationOn className="location-icon" />
                        <p className="location">{location}</p>
                      </div>
                      <div className="employement-type-icon">
                        <p className="location">{employmentType}</p>
                      </div>
                    </div>
                    <div className="package-container">
                      <p className="package">{packagePerAnnum}</p>
                    </div>
                  </div>
                </div>
                <hr className="item-hr-line" />
                <div className="second-part-container">
                  <div className="description-visit-container">
                    <h1 className="description-job-heading">Description</h1>
                    <a className="visit-anchor" href={companyWebsiteUrl}>
                      Visit <BiLinkExternal />
                    </a>
                  </div>
                  <p className="description-para">{jobDescription}</p>
                </div>
                <h1>Skills</h1>
                <ul className="ul-job-details-container">
                  {skills.map(eachItem => (
                    <li className="li-job-details-container" key={eachItem.name}>
                      <img
                        className="skill-img"
                        src={eachItem.imageUrl}
                        alt={eachItem.name}
                      />
                      <p>{eachItem.name}</p>
                    </li>
                  ))}
                </ul>
                <div className="company-life-img-container">
                  <div className="life-heading-para-container">
                    <h1>Life at Company</h1>
                    <p>{lifeAtCompany.description}</p>
                  </div>
                  <img src={lifeAtCompany.imageUrl} alt="life at company" />
                </div>
              </div>
                </>
            )
        }
        return null
        
        
    }
    
  return (
    <div>
      
    </div>
  )
}
