import React from "react";

import { Column, Stack, Img, Row, Text, List } from "components";

const FrameTwentyThreePage = () => {
  return (
    <>
      <Column className="items-center mx-[auto] pb-[1px] w-[100%]">
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Column className="absolute w-[100%]">
            <Stack className="lg:h-[150px] xl:h-[172px] 2xl:h-[193px] 3xl:h-[232px] w-[100%]">
              <Img
                src="images/img_vector.png"
                className="absolute lg:h-[150px] xl:h-[172px] 2xl:h-[193px] 3xl:h-[232px] right-[0] w-[71%]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_1.png"
                className="absolute lg:h-[119px] xl:h-[137px] 2xl:h-[154px] 3xl:h-[184px] left-[0] top-[0] w-[65%]"
                alt="Vector One"
              />
            </Stack>
            <Img
              src="images/img_vector_220X560.png"
              className="lg:h-[129px] xl:h-[147px] 2xl:h-[166px] 3xl:h-[199px] lg:mt-[351px] xl:mt-[401px] 2xl:mt-[451px] 3xl:mt-[542px] w-[29%]"
              alt="Vector Two"
            />
          </Column>
          <Column className="absolute inset-x-[0] mx-[auto] top-[4%] w-[94%]">
            <header className="font-inter w-[100%]">
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
            <Text className="font-bold font-nunito lg:ml-[245px] xl:ml-[280px] 2xl:ml-[315px] 3xl:ml-[378px] xl:mt-[103px] 2xl:mt-[116px] 3xl:mt-[139px] lg:mt-[90px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-black_900 w-[auto]">
              2022-2023 Volunteer Coordinator
            </Text>
            <Row className="font-nunito items-center lg:ml-[50px] xl:ml-[58px] 2xl:ml-[65px] 3xl:ml-[78px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[82%]">
              <Text className="font-bold mt-[1px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                Approve Hour Requests
              </Text>
              <Text className="font-bold mb-[1px] lg:ml-[378px] xl:ml-[433px] 2xl:ml-[487px] 3xl:ml-[584px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                Post Volunteer Opportunity
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[29%]"
              orientation="vertical"
            >
              <Row className="bg-gray_100 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                <Column className="bg-gray_903 font-nunito lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
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
                <Column className="bg-gray_903 font-nunito lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
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
                <Column className="bg-gray_903 font-nunito lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
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
                <Column className="bg-gray_903 font-nunito lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
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
        </Stack>
      </Column>
    </>
  );
};

export default FrameTwentyThreePage;
