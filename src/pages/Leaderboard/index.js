import React from "react";

import { Column, Stack, Img, Row, Text, List } from "components";
import { Link } from "react-router-dom";
import { getLeaderboardByCollege } from "api/api";

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = React.useState(null);

  getLeaderboardByCollege("jones").then((data) => {
    setLeaderboard(data);
  });
  return (
    <>
      <Column className="font-inter items-center mx-[auto] w-[100%]">
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Column className="absolute w-[100%]">
            <Stack className="lg:h-[150px] xl:h-[172px] 2xl:h-[193px] 3xl:h-[232px] w-[100%]">
              <Img
                src="images/img_vector.png"
                className="absolute lg:h-[150px] xl:h-[172px] 2xl:h-[193px] 3xl:h-[232px] right-[0] w-[71%]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_208X1247.png"
                className="absolute lg:h-[119px] xl:h-[137px] 2xl:h-[154px] 3xl:h-[184px] left-[0] top-[0] w-[65%]"
                alt="Vector One"
              />
            </Stack>
            <Img
              src="images/img_vector_213X559.png"
              className="lg:h-[129px] xl:h-[147px] 2xl:h-[166px] 3xl:h-[199px] lg:mt-[351px] xl:mt-[401px] 2xl:mt-[451px] 3xl:mt-[542px] w-[29%]"
              alt="Vector Two"
            />
          </Column>
          <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[94%]">
            <header className="w-[100%]">
              <Row className="xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] w-[100%]">
                <Link className="cursor-pointer hover:font-bold font-bold xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]"
                to="/dashboard">
                  Volo
                </Link>
                <Link className="cursor-pointer hover:font-bold font-bold lg:ml-[476px] xl:ml-[544px] 2xl:ml-[612px] 3xl:ml-[734px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]"
                to="/dashboard">
                  Dashboard
                </Link>
                <Link className="cursor-pointer hover:font-bold font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]"
                to="/leaderboard">
                  Leaderboard
                </Link>
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
            <Column className="items-center lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] shadow-bs w-[19%]">
              <Text className="font-bold lg:text-[32px] xl:text-[36px] 2xl:text-[41px] 3xl:text-[49px] text-gray_901 w-[auto]">
                Leaderboard
              </Text>
              <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-gray_600 w-[auto]">
                2022-2023 Academic Year
              </Text>
            </Column>
            <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] w-[59%]">
              <List
                className="gap-[0] min-h-[auto] w-[93%]"
                orientation="vertical"
              >
                {leaderboard != undefined && leaderboard['users'] ? leaderboard['users'].map((item) => (
                <Row className="bg-white_A700 items-center lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] lg:p-[11px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                  <Text className="font-bold lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">

                  </Text>
                  <Img
                    src="images/img_studentimg1.png"
                    className="lg:h-[38px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] rounded-radius50 lg:w-[37px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                    alt="studentimgOne"
                  />
                  <Text className="font-bold lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-black_900 w-[auto]">
                    {item['name']}
                  </Text>
                  <Text className="font-normal lg:ml-[267px] xl:ml-[306px] 2xl:ml-[344px] 3xl:ml-[413px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-gray_400 w-[auto]">
                    {item['hours'] + " "} Hours
                  </Text>
                </Row>
                )) : <Row className="bg-white_A700 items-center lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] lg:p-[11px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] w-[100%]">
                    <Text className="font-bold lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
                      No users.
                    </Text>
                    </Row>}
              </List>
            </Row>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default LeaderboardPage;
