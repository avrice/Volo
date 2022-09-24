import React from "react";

import { Column, Img, Row, Text, Button } from "components";

const FrameThirtyFourPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-nunito mx-[auto] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] w-[100%]">
        <Column className="items-end lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] mt-[3px] xl:pl-[1140px] 2xl:pl-[1282px] 3xl:pl-[1538px] lg:pl-[996px] w-[96%]">
          <Img
            src="images/img_close.svg"
            className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[100%]"
            alt="close"
          />
        </Column>
        <Column className="items-center 3xl:mb-[111px] lg:mb-[72px] xl:mb-[82px] 2xl:mb-[93px] lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] lg:mt-[47px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:pr-[54px] xl:pr-[62px] 2xl:pr-[69px] 3xl:pr-[83px] w-[96%]">
          <Column className="w-[100%]">
            <Row className="w-[94%]">
              <Column className="bg-gray_903 lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] items-center 3xl:mb-[11px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[6px] rounded-radius5 lg:w-[44px] xl:w-[50px] 2xl:w-[57px] 3xl:w-[68px]">
                <Text className="font-bold leading-[normal] mb-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center text-white_A700 w-[79%]">
                  Sep
                  <br />
                  25
                </Text>
              </Column>
              <Text className="font-extrabold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[2px] lg:text-[43px] xl:text-[49px] 2xl:text-[55px] 3xl:text-[67px] text-black_900 w-[auto]">
                Sid 80s Cleanup
              </Text>
              <Text className="font-semibold lg:ml-[476px] xl:ml-[545px] 2xl:ml-[613px] 3xl:ml-[735px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] lg:text-[25px] xl:text-[29px] 2xl:text-[32px] 3xl:text-[39px] text-black_900 w-[auto]">
                1hr
              </Text>
            </Row>
            <Text className="font-semibold xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] lg:text-[22px] xl:text-[25px] 2xl:text-[29px] 3xl:text-[34px] text-black_900 w-[auto]">
              1:30pm - 2:30pm CST
            </Text>
            <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:text-[22px] xl:text-[25px] 2xl:text-[29px] 3xl:text-[34px] text-black_900 w-[auto]">
              Sid Commons
            </Text>
            <Text className="font-semibold leading-[normal] lg:mt-[19px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[22px] xl:text-[25px] 2xl:text-[29px] 3xl:text-[34px] text-black_900 w-[99%]">
              Description:
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Row className="items-end justify-between lg:mt-[25px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]">
              <Text className="font-semibold leading-[normal] lg:text-[22px] xl:text-[25px] 2xl:text-[29px] 3xl:text-[34px] text-black_900 w-[33%]">
                Requirements:
                <br />
                Lorem ipsum dolor sit amet
                <br />
                Lorem ipsum dolor sit amet
                <br />
                Lorem ipsum dolor sit amet
              </Text>
              <Button
                className="font-bold mb-[4px] 3xl:mt-[103px] lg:mt-[67px] xl:mt-[76px] 2xl:mt-[86px] lg:text-[28px] xl:text-[33px] 2xl:text-[37px] 3xl:text-[44px] text-center w-[14%]"
                shape="RoundedBorder5"
                size="sm"
                variant="FillTeal300"
              >
                Register
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FrameThirtyFourPage;
