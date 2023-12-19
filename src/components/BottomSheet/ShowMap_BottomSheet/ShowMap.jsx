import React from 'react';
import * as styles from './ShowMapStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,  faX } from "@fortawesome/free-solid-svg-icons";


const ShowMap = ({meetingList, toggleBottomSheet}) => {
    
  return (
      <>
          <styles.BottomSheetHeader>
              <p>지도 보기</p>
              <FontAwesomeIcon icon={faX}
                  style={{
                      color: "lightgray",
                      cursor: "pointer"
                  }}
                onClick={toggleBottomSheet}
              />
          </styles.BottomSheetHeader>
          {/* <styles.MeetingItemsDiv>
              {meetingList.map(meeting => (
                    <styles.MeetingItem key={meeting.id}>
                        <img src={meeting.meetingImgSrc} alt="img"></img>
                      <styles.MeetingItemTexts>
                          <styles.MeetingTitle>{meeting.meetingTitle}</styles.MeetingTitle>
                          <styles.MeetingLocation>
                              <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f7a070"}} />{" "}
                              {meeting.meetingLocation}
                          </styles.MeetingLocation>
                      </styles.MeetingItemTexts>
                    </styles.MeetingItem>
              ))}
              <div style={{paddingTop:"5%"}}></div>
          </styles.MeetingItemsDiv> */}
      </>
  )
}

export default ShowMap