import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Stack, Img, Row, Text, List, Line, Button } from "components";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const CoordinatorScreenPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/leaderboard");
  }

  return (
    <>
      <Column className="font-inter items-center justify-end mx-[auto] pr-[1px] pt-[1px] w-[100%]">
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
          <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
            <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
              <Column className="absolute items-center pb-[1px] w-[100%]">
                <Stack className="lg:h-[152px] xl:h-[174px] 2xl:h-[196px] 3xl:h-[235px] w-[100%]">
                  <Img
                    src="images/img_vector.png"
                    className="absolute lg:h-[151px] xl:h-[173px] 2xl:h-[194px] 3xl:h-[233px] inset-y-[0] my-[auto] right-[0] w-[71%]"
                    alt="Vector"
                  />
                  <Img
                    src="images/img_vector_208X1247.png"
                    className="absolute lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] left-[0] top-[0] w-[65%]"
                    alt="Vector One"
                  />
                </Stack>
                <Row className="justify-between lg:mt-[310px] xl:mt-[354px] 2xl:mt-[399px] 3xl:mt-[479px] w-[100%]">
                  <Img
                    src="images/img_vector_213X559.png"
                    className="lg:h-[125px] xl:h-[143px] 2xl:h-[160px] 3xl:h-[192px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] w-[29%]"
                    alt="Vector Two"
                  />
                  <Img
                    src="defaultNoData.png"
                    className="lg:h-[168px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[260px] w-[12%]"
                    alt="Vector Three"
                  />
                </Row>
              </Column>
              <Column className="absolute inset-x-[0] items-center mx-[auto] top-[4%] w-[95%]">
                <header className="font-inter w-[100%]">
                  <Row className="xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] w-[100%]">
                    <Text className="cursor-pointer hover:font-bold font-bold xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                      Rice Volunteering
                    </Text>
                    <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[476px] xl:ml-[544px] 2xl:ml-[612px] 3xl:ml-[734px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                      Dashboard
                    </Text>
                    <Text
                      className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]"
                      onClick={handleNavigate2}
                    >
                      Leaderboard
                    </Text>
                    <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                      Coordinate
                    </Text>
                    <Img
                      src="images/img_eye.svg"
                      className="lg:h-[33px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[57px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:w-[32px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                      alt="eye"
                    />
                  </Row>
                </header>
                <Text className="font-bold font-nunito 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[85px] xl:mt-[98px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-black_900 w-[auto]">
                  2022-2023 Volunteer Coordinator
                </Text>
                <Row className="font-nunito justify-center lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[68%]">
                  <Column className="items-center w-[63%]">
                    <Text className="font-bold lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                      Approve Hour Requests
                    </Text>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[66%]"
                      orientation="vertical"
                    >
                      <Row className="bg-gray_100 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                        <Column className="bg-gray_900 font-nunito lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
                          <Text className="font-bold leading-[normal] mb-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[79%]">
                            Sep
                            <br />
                            20
                          </Text>
                        </Column>
                        <Column className="font-nunito lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[1px] w-[46%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                            Sid80s Cleanup
                          </Text>
                          <Text className="font-bold mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                            Aditya Viswanathan
                          </Text>
                          <Text className="font-semibold mt-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                            1:30pm - 2:30pm CST
                          </Text>
                        </Column>
                        <Img
                          src="images/img_hookg9c457be5d.png"
                          className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                          alt="hookg9c457be5d"
                        />
                        <Img
                          src="images/img_falseg755c5386.png"
                          className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[13%]"
                          alt="falseg755c5386"
                        />
                        <Text className="font-bold font-inter xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-black_900 w-[auto]">
                          ?
                        </Text>
                      </Row>
                      <Row className="bg-gray_100 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                        <Column className="bg-gray_900 font-nunito lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
                          <Text className="font-bold leading-[normal] mb-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[79%]">
                            Sep
                            <br />
                            20
                          </Text>
                        </Column>
                        <Column className="font-nunito lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[1px] w-[46%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                            Sid80s Cleanup
                          </Text>
                          <Text className="font-bold mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                            Aditya Viswanathan
                          </Text>
                          <Text className="font-semibold mt-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                            1:30pm - 2:30pm CST
                          </Text>
                        </Column>
                        <Img
                          src="images/img_hookg9c457be5d.png"
                          className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                          alt="hookg9c457be5d One"
                        />
                        <Img
                          src="images/img_falseg755c5386.png"
                          className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[13%]"
                          alt="falseg755c5386 One"
                        />
                        <Text className="font-bold font-inter xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-black_900 w-[auto]">
                          ?
                        </Text>
                      </Row>
                      <Row className="bg-gray_100 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                        <Column className="bg-gray_900 font-nunito lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
                          <Text className="font-bold leading-[normal] mb-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[79%]">
                            Sep
                            <br />
                            20
                          </Text>
                        </Column>
                        <Column className="font-nunito lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[1px] w-[46%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                            Sid80s Cleanup
                          </Text>
                          <Text className="font-bold mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                            Aditya Viswanathan
                          </Text>
                          <Text className="font-semibold mt-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                            1:30pm - 2:30pm CST
                          </Text>
                        </Column>
                        <Img
                          src="images/img_hookg9c457be5d.png"
                          className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                          alt="hookg9c457be5d Two"
                        />
                        <Img
                          src="images/img_falseg755c5386.png"
                          className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[13%]"
                          alt="falseg755c5386 Two"
                        />
                        <Text className="font-bold font-inter xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-black_900 w-[auto]">
                          ?
                        </Text>
                      </Row>
                      <Row className="bg-gray_100 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                        <Column className="bg-gray_900 font-nunito lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
                          <Text className="font-bold leading-[normal] mb-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[79%]">
                            Sep
                            <br />
                            20
                          </Text>
                        </Column>
                        <Column className="font-nunito lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[1px] w-[46%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                            Sid80s Cleanup
                          </Text>
                          <Text className="font-bold mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                            Aditya Viswanathan
                          </Text>
                          <Text className="font-semibold mt-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                            1:30pm - 2:30pm CST
                          </Text>
                        </Column>
                        <Img
                          src="images/img_hookg9c457be5d.png"
                          className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                          alt="hookg9c457be5d Three"
                        />
                        <Img
                          src="images/img_falseg755c5386.png"
                          className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[13%]"
                          alt="falseg755c5386 Three"
                        />
                        <Text className="font-bold font-inter xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-black_900 w-[auto]">
                          ?
                        </Text>
                      </Row>
                    </List>
                  </Column>
                  <Column className="items-end mt-[3px] w-[37%]">
                    <Text className="font-bold lg:mr-[2px] 2xl:mr-[3px] xl:mr-[3px] 3xl:mr-[4px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                      Post Volunteer Opportunity
                    </Text>
                    <Line className="bg-bluegray_900 h-[1px] lg:mt-[202px] xl:mt-[231px] 2xl:mt-[260px] 3xl:mt-[312px] w-[81%]" />
                    <Column className="lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[83%]">
                      <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                      <Line className="bg-bluegray_900 h-[1px] lg:mt-[43px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] w-[100%]" />
                      <Img
                        src="images/img_clock.svg"
                        className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[196px] xl:ml-[224px] 2xl:ml-[252px] 3xl:ml-[302px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[6%]"
                        alt="clock"
                      />
                    </Column>
                  </Column>
                </Row>
              </Column>
            </Stack>
            <Accordion
              preExpanded={[0]}
              className="absolute bottom-[13%] right-[17%] w-[24%]"
            >
              {" "}
              {[...Array(4)].map((item, index) => (
                <AccordionItem uuid={index} key={Math.random()}>
                  <Column className="xl:pb-[4px] lg:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] xl:pr-[4px] lg:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[100%]">
                    <AccordionItemHeading className="w-full">
                      <AccordionItemButton>
                        <AccordionItemState>
                          {({ expanded }) => (
                            <Row className="items-end justify-between w-[20%]">
                              {expanded && (
                                <Img
                                  src="images/img_line20.svg"
                                  className="h-[1px] mb-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[25%]"
                                  alt="LineTwenty"
                                />
                              )}
                              <Text className="font-normal ml-[3px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_400 w-[auto]">
                                Start date
                              </Text>
                              {!expanded && (
                                <Img
                                  src="images/img_line20.svg"
                                  className="h-[1px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[25%]"
                                  alt="LineThirtySeven"
                                />
                              )}
                            </Row>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="w-full">
                      <Column className="items-center 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mr-[200px] xl:mr-[229px] 2xl:mr-[258px] 3xl:mr-[309px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[22%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                          09/24/2022
                        </Text>
                      </Column>
                    </AccordionItemPanel>
                  </Column>
                  <Line className="self-center w-[100%] h-[1px] bg-bluegray_900" />
                </AccordionItem>
              ))}
            </Accordion>
          </Stack>
          <Column className="absolute bottom-[4%] font-nunito items-center right-[17%] w-[24%]">
            <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-black_900 w-[auto]">
              New Event
            </Text>
            <Column className="lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
              <Text className="font-normal ml-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900_72 w-[auto]">
                Add title
              </Text>
              <Line className="bg-bluegray_900 h-[1px] mt-[1px] w-[99%]" />
              <Text className="font-normal lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900_72 w-[auto]">
                Contact netID
              </Text>
              <Line className="bg-bluegray_900 h-[1px] mt-[1px] w-[99%]" />
              <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900_72 w-[auto]">
                Contact Name
              </Text>
              <Line className="bg-bluegray_900 h-[1px] mt-[2px] w-[99%]" />
              <Row className="items-end mt-[2px] w-[95%]">
                <Text className="font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900_72 w-[auto]">
                  Add location
                </Text>
                <Img
                  src="images/img_location.svg"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] mb-[1px] lg:ml-[188px] xl:ml-[215px] 2xl:ml-[242px] 3xl:ml-[290px] w-[5%]"
                  alt="location"
                />
              </Row>
              <Line className="bg-bluegray_900 h-[1px] mt-[1px] w-[99%]" />
              <Row className="ml-[1px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[99%]">
                <Line className="bg-black_900 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[1px]" />
                <Line className="bg-bluegray_900 h-[1px] lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[79%]" />
                <Line className="bg-black_900 lg:h-[24px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] w-[1px]" />
              </Row>
              <Row className="items-center justify-between ml-[1px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[99%]">
                <Line className="bg-black_900 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[1px]" />
                <Line className="bg-black_900 lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] w-[1px]" />
              </Row>
              <Row className="items-center justify-between lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                <Line className="bg-black_900 lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[1px]" />
                <Line className="bg-black_900 lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[1px]" />
              </Row>
              <Row className="font-inter lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                <Line className="bg-black_900 lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] w-[1px]" />
                <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  10:00 PM
                </Text>
                <Line className="bg-black_900 lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] lg:ml-[218px] xl:ml-[249px] 2xl:ml-[280px] 3xl:ml-[336px] w-[1px]" />
              </Row>
              <Line className="bg-bluegray_900 h-[1px] ml-[1px] w-[99%]" />
              <Button className="font-bold lg:ml-[217px] xl:ml-[248px] 2xl:ml-[279px] 3xl:ml-[335px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[20%]">
                Save
              </Button>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default CoordinatorScreenPage;
