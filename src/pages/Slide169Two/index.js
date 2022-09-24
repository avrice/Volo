import React from "react";

import { Column, Text, Row, Stack, Img } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Slide169TwoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-nunito items-center mx-[auto] lg:p-[136px] xl:p-[156px] 2xl:p-[175px] 3xl:p-[210px] w-[100%]">
        <Text className="font-normal leading-[normal] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-black_900 text-center w-[39%]">
          You Have: <br />
          22 Volunteering Hours <br />
          For The 2022-2023 Academic Year
        </Text>
        <Column className="font-inter 3xl:mb-[113px] lg:mb-[73px] xl:mb-[84px] 2xl:mb-[94px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] w-[69%]">
          <Row className="ml-[4px] w-[63%]">
            <Column className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[67%]">
              <Stack className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] ml-[1px] w-[3%]">
                <CircularProgressbar
                  className="absolute border-solid lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] overflow-visible right-[0] w-[75%]"
                  value="74"
                  name="GroupFive"
                  strokeWidth={22}
                  styles={{
                    trail: { strokeWidth: 33, stroke: "" },
                    path: {
                      strokeLinecap: "square",
                      height: "100%",
                      "transform-origin": "center",
                      transform: "rotate(-60deg)",
                    },
                  }}
                ></CircularProgressbar>
                <CircularProgressbar
                  className="absolute border-solid lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] left-[0] overflow-visible w-[75%]"
                  value="74"
                  name="GroupSix"
                  strokeWidth={22}
                  styles={{
                    trail: { strokeWidth: 33, stroke: "" },
                    path: {
                      strokeLinecap: "square",
                      height: "100%",
                      "transform-origin": "center",
                      transform: "rotate(-60deg)",
                    },
                  }}
                ></CircularProgressbar>
              </Stack>
              <Stack className="xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mt-[1px] w-[3%]">
                <Img
                  src="images/img_rectangle4160.svg"
                  className="absolute bottom-[0] lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] inset-x-[0] mx-[auto] w-[79%]"
                  alt="Rectangle4160"
                />
                <Img
                  src="images/img_subtract.svg"
                  className="absolute lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] right-[0] top-[0] w-[43%]"
                  alt="Subtract"
                />
                <Img
                  src="images/img_subtract_gray_902.svg"
                  className="absolute lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] left-[0] top-[0] w-[43%]"
                  alt="Subtract One"
                />
              </Stack>
            </Column>
            <Stack className="lg:h-[54px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[33%]">
              <Text className="absolute bottom-[0] font-normal left-[0] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-black_900 w-[auto]">
                You Can:
              </Text>
              <Img
                src="images/img_user.svg"
                className="absolute lg:h-[44px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] right-[0] top-[0] w-[34%]"
                alt="user"
              />
            </Stack>
          </Row>
          <Row className="justify-between lg:mt-[57px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[100%]">
            <Text className="font-normal leading-[normal] mt-[3px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-black_900 text-center w-[30%]">
              Add/Drop/Waitlist
              <br />
              New Volunteering <br />
              Sessions
            </Text>
            <Text className="font-normal not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-black_900 w-[auto]">
              View Leaderboard
            </Text>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Slide169TwoPage;
