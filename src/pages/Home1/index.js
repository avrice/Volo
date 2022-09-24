import React from "react";

import { Column, Row, Text, Img, List } from "components";

const Home1Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter mx-[auto] lg:p-[22px] xl:p-[26px] 2xl:p-[29px] 3xl:p-[35px] w-[100%]">
        <Column className="items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] lg:mr-[9px] w-[98%]">
          <header className="w-[100%]">
            <Row className="xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] w-[100%]">
              <Text className="cursor-pointer hover:font-bold font-bold xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Rice Volunteering
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[501px] xl:ml-[573px] 2xl:ml-[645px] 3xl:ml-[774px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Coordinate
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Leaderboard
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Calendar
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Tracker
              </Text>
              <Img
                src="images/img_eye.svg"
                className="lg:h-[33px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[36px] xl:ml-[42px] 2xl:ml-[47px] 3xl:ml-[56px] lg:w-[32px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                alt="eye"
              />
            </Row>
          </header>
        </Column>
        <Column className="font-nunito items-end lg:mb-[28px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[43px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] lg:mr-[9px] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] lg:px-[42px] xl:px-[48px] 2xl:px-[54px] 3xl:px-[65px] w-[98%]">
          <Column className="w-[66%]">
            <Text className="font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[31px] 3xl:text-[37px] text-black_900 w-[auto]">
              Total hours: 10
            </Text>
            <Row className="justify-evenly mt-[2px] w-[100%]">
              <Column className="lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] 3xl:mt-[99px] w-[57%]">
                <Text className="font-bold lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-black_900 w-[auto]">
                  Upcoming Activities:
                </Text>
                <List
                  className="gap-[0] min-h-[auto] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[83%]"
                  orientation="vertical"
                >
                  <Column className="bg-gray_100 lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <Row className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] w-[62%]">
                      <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Sid 80s
                      </Text>
                      <Text className="font-semibold lg:ml-[40px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] mt-[2px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 w-[auto]">
                        1:30 - 2:30
                      </Text>
                      <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Where: Sid Commons
                      </Text>
                    </Row>
                    <Row className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] my-[1px] w-[72%]">
                      <Text className="font-semibold mt-[2px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Cleaning
                      </Text>
                      <Text className="font-semibold lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        {" "}
                        1 hour
                      </Text>
                      <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Checked by: Aditaya Vargarwal
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_100 lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <Row className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] w-[46%]">
                      <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Sid 80s
                      </Text>
                      <Text className="font-semibold lg:ml-[40px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] mt-[2px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 w-[auto]">
                        12:00 - 2:00
                      </Text>
                      <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Where:{" "}
                      </Text>
                    </Row>
                    <Row className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] my-[1px] w-[51%]">
                      <Text className="font-semibold mt-[2px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Decorating
                      </Text>
                      <Text className="font-semibold lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        2 hours
                      </Text>
                      <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Checked by:{" "}
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_100 lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <Row className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] w-[46%]">
                      <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Lovett Public
                      </Text>
                      <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 w-[auto]">
                        12:00 - 2:00
                      </Text>
                      <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Where:{" "}
                      </Text>
                    </Row>
                    <Row className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] my-[1px] w-[51%]">
                      <Text className="font-semibold mt-[2px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Catering
                      </Text>
                      <Text className="font-semibold lg:ml-[47px] xl:ml-[54px] 2xl:ml-[60px] 3xl:ml-[72px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        2 hours
                      </Text>
                      <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Checked by:{" "}
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_100 lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <Row className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] w-[46%]">
                      <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Lovett Public
                      </Text>
                      <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 w-[auto]">
                        10:00 - 1:00
                      </Text>
                      <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Where:{" "}
                      </Text>
                    </Row>
                    <Row className="lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] my-[1px] w-[51%]">
                      <Text className="font-semibold mt-[2px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Security
                      </Text>
                      <Text className="font-semibold lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        2 hours
                      </Text>
                      <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                        Checked by:{" "}
                      </Text>
                    </Row>
                  </Column>
                </List>
                <Text className="font-bold lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-black_900 w-[auto]">
                  Recent Activity:
                </Text>
                <List
                  className="gap-[0] min-h-[auto] ml-[1px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[83%]"
                  orientation="vertical"
                >
                  <Row className="bg-gray_100 items-center lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] lg:p-[5px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
                    <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[83%]">
                      <Row className="w-[74%]">
                        <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Sid 80s
                        </Text>
                        <Text className="font-semibold lg:ml-[40px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] mt-[2px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 w-[auto]">
                          1:30 - 2:30
                        </Text>
                        <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Where: Sid Commons
                        </Text>
                      </Row>
                      <Row className="mt-[1px] w-[86%]">
                        <Text className="font-semibold mt-[2px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Cleaning
                        </Text>
                        <Text className="font-semibold lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          {" "}
                          1 hour
                        </Text>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Checked by: Aditaya Vargarwal
                        </Text>
                      </Row>
                    </Column>
                    <Img
                      src="images/img_falseg755c5386.png"
                      className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] mb-[3px] w-[8%]"
                      alt="falseg755c5386"
                    />
                  </Row>
                  <Row className="bg-gray_100 items-center lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <Column className="mb-[1px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] w-[85%]">
                      <Row className="w-[55%]">
                        <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Sid 80s
                        </Text>
                        <Text className="font-semibold lg:ml-[40px] xl:ml-[46px] 2xl:ml-[51px] 3xl:ml-[62px] mt-[2px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 w-[auto]">
                          12:00 - 2:00
                        </Text>
                        <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Where:{" "}
                        </Text>
                      </Row>
                      <Row className="mt-[1px] w-[60%]">
                        <Text className="font-semibold mt-[2px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Decorating
                        </Text>
                        <Text className="font-semibold lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          2 hours
                        </Text>
                        <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Checked by:{" "}
                        </Text>
                      </Row>
                    </Column>
                    <Img
                      src="images/img_hookg9c457be5d.png"
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                      alt="hookg9c457be5d"
                    />
                  </Row>
                  <Row className="bg-gray_100 items-center lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <Column className="mb-[1px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] w-[85%]">
                      <Row className="w-[55%]">
                        <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Lovett Public
                        </Text>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 w-[auto]">
                          12:00 - 2:00
                        </Text>
                        <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Where:{" "}
                        </Text>
                      </Row>
                      <Row className="mt-[1px] w-[60%]">
                        <Text className="font-semibold mt-[2px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Catering
                        </Text>
                        <Text className="font-semibold lg:ml-[47px] xl:ml-[54px] 2xl:ml-[60px] 3xl:ml-[72px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          2 hours
                        </Text>
                        <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Checked by:{" "}
                        </Text>
                      </Row>
                    </Column>
                    <Img
                      src="images/img_hookg9c457be5d.png"
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                      alt="hookg9c457be5d One"
                    />
                  </Row>
                  <Row className="bg-gray_100 items-center lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <Column className="mb-[1px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] w-[85%]">
                      <Row className="w-[55%]">
                        <Text className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Lovett Public
                        </Text>
                        <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-black_900 w-[auto]">
                          10:00 - 1:00
                        </Text>
                        <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Where:{" "}
                        </Text>
                      </Row>
                      <Row className="mt-[1px] w-[60%]">
                        <Text className="font-semibold mt-[2px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Security
                        </Text>
                        <Text className="font-semibold lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          2 hours
                        </Text>
                        <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] 3xl:text-[10px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                          Checked by:{" "}
                        </Text>
                      </Row>
                    </Column>
                    <Img
                      src="images/img_hookg9c457be5d.png"
                      className="lg:h-[18px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px]"
                      alt="hookg9c457be5d Two"
                    />
                  </Row>
                </List>
              </Column>
              <Column className="font-inter items-center lg:mb-[42px] xl:mb-[48px] 2xl:mb-[54px] 3xl:mb-[64px] w-[43%]">
                <Text className="font-normal not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                  Open Volunteering Positions
                </Text>
                <Column className="bg-bluegray_101 items-center justify-end lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:pt-[315px] xl:pt-[360px] 2xl:pt-[406px] 3xl:pt-[487px] w-[100%]">
                  <div className="bg-gray_602 lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[100%]"></div>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Home1Page;
