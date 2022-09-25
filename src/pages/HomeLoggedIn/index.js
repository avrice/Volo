import React from "react";

import { Stack, Img, Column, Text, Row, Button } from "components";

const HomeLoggedInPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-nunito lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] w-[100%]">
        <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack
            className="absolute bg-cover bg-repeat lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] lg:px-[40px] xl:px-[46px] 2xl:px-[52px] 3xl:px-[63px] w-[100%]"
            style={{ backgroundImage: "url('images/img_87311.png')" }}
          >
            <Img
              src="images/img_layerx00201_769X1123.svg"
              className="absolute bottom-[3%] lg:h-[449px] xl:h-[514px] 2xl:h-[578px] 3xl:h-[693px] right-[0] w-[58%]"
              alt="Layerx00201"
            />
          </Stack>
          <Column className="absolute h-[max-content] inset-y-[0] items-center left-[5%] my-[auto] w-[25%]">
            <Text className="font-bold leading-[normal] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-black_900 w-[100%]">
              Rice Volunteering Tracker
            </Text>
            <Text className="font-bold leading-[normal] lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_601 w-[99%]">
              A Rice-dedicated site to standardizing volunteer hour tracking
            </Text>
          </Column>
        </Stack>
        <Column className="absolute font-inter inset-x-[0] mx-[auto] top-[4%] w-[94%]">
          <header className="w-[100%]">
            <Row className="xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] w-[100%]">
              <Text className="cursor-pointer hover:font-bold font-bold xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Rice Volunteering
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[476px] xl:ml-[544px] 2xl:ml-[612px] 3xl:ml-[734px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Dashboard
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
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
          <Button
            className="font-bold lg:ml-[205px] xl:ml-[235px] 2xl:ml-[264px] 3xl:ml-[317px] lg:mt-[327px] xl:mt-[374px] 2xl:mt-[421px] 3xl:mt-[506px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center w-[9%]"
            shape="RoundedBorder10"
            size="lg"
            variant="FillPurpleA700"
          >
            Join Now
          </Button>
        </Column>
      </Stack>
    </>
  );
};

export default HomeLoggedInPage;
