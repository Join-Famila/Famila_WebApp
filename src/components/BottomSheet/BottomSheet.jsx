import React from 'react';
import * as styles from './BottomSheetStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCrown, faX } from "@fortawesome/free-solid-svg-icons";


const BottomSheet = ({isOpen, meetingList, myMeeting, toggleBottomSheet}) => {
    
  return (
      <styles.BottomSheetBody isOpen={isOpen}>
          <styles.BottomSheetHeader>
              <p>내 모임 <span>{myMeeting}</span></p>
              <FontAwesomeIcon icon={faX}
                  style={{
                      color: "lightgray",
                      cursor: "pointer"
                  }}
                onClick={toggleBottomSheet}
              />
          </styles.BottomSheetHeader>
          <styles.MeetingItemsDiv>
              {meetingList.map(meeting => (
                    <styles.MeetingItem key={meeting.id}>
                        <img src={meeting.meetingImgSrc} alt="img"></img>
                      <styles.MeetingItemTexts>
                          {meeting.isMeetingOrder ? 
                              //아이콘
                              <styles.MeetingOrder>
                                  <FontAwesomeIcon icon={faCrown} />{" "}내가 모임장
                              </styles.MeetingOrder> : 
                              <div></div>
                          }
                          <styles.MeetingTitle>{meeting.meetingTitle}</styles.MeetingTitle>
                          <styles.MeetingLocation>
                              <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f7a070"}} />{" "}
                              {meeting.meetingLocation}
                          </styles.MeetingLocation>
                      </styles.MeetingItemTexts>
                    </styles.MeetingItem>
                ))}
          </styles.MeetingItemsDiv>

      </styles.BottomSheetBody>
  )
}

export default BottomSheet