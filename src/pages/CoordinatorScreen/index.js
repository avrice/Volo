import React, { useState } from "react";

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
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Input, TextField } from "@mui/material";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

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
                    <Link className="cursor-pointer hover:font-bold font-bold xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]"
                    to="/dashboard">
                      Volo
                    </Link>
                    <Link className="cursor-pointer hover:font-bold font-bold lg:ml-[476px] xl:ml-[544px] 2xl:ml-[612px] 3xl:ml-[734px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]"
                    to="/dashboard">
                      Dashboard
                    </Link>
                    <Text
                      className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]"
                      onClick={handleNavigate2}
                    >
                      Leaderboard
                    </Text>
                    <Link className="cursor-pointer hover:font-bold font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]"
                    to="/coordinate">
                      Coordinate
                    </Link>
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
                    
                  </Column>
                </Row>
              </Column>
            </Stack>
          </Stack>
          <Column className="absolute bottom-[4%] font-nunito items-center right-[17%] w-[24%]">
            <Column className="lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
              <FormControl>
                <TextField label="Event title"/>
                <TextField label="Contact netId"/>
                <TextField label="Contact name"/>
                <TextField label="Event location"/>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DateTimePicker onChange={() => {}} renderInput={props => <TextField {...props} />}/>
                  <DateTimePicker onChange={() => {}} renderInput={props => <TextField {...props} />}/>
                </LocalizationProvider>
                
              </FormControl>
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
