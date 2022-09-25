import React from "react";

import { Column, Stack, Img, Row, Text, List, Button } from "components";
import { Link } from "react-router-dom";
import {getEventsByCollege, getLeaderboardByCollege} from "../../api/api";

const DashboardPage = () => {
  const [events, setEvents] = React.useState(null);

  React.useEffect(() => {
    getEventsByCollege("jones").then((data) => {

      setEvents({
        'upcoming' : data['data']['list'].filter((event) => Date.parse(event['timestamp_start']) > Date.now()),
        'past' : data['data']['list'].filter((event) => Date.parse(event['timestamp_end']) < Date.now())
      });
    });
  }, [])

  return (
    <>
      <Column className="items-center mx-[auto] w-[100%]">
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Column className="absolute w-[100%]">
            <Stack className="lg:h-[150px] xl:h-[172px] 2xl:h-[193px] 3xl:h-[232px] w-[100%]">
              <Img
                src="images/img_vector.png"
                className="absolute lg:h-[150px] xl:h-[172px] 2xl:h-[193px] 3xl:h-[232px] right-[0] w-[71%]"
                alt="Vector"
              />
              <Img
                src="images/img_vector_204X1248.png"
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
          <Column className="absolute inset-x-[0] items-center mx-[auto] top-[4%] w-[94%]">
            <header className="font-inter w-[100%]">
              <Row className="xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] w-[100%]">
                <Link className="cursor-pointer hover:font-bold font-bold xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]"
                to="/dashboard">
                  Volo
                </Link>
                <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[476px] xl:ml-[544px] 2xl:ml-[612px] 3xl:ml-[734px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                  Dashboard
                </Text>
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
            <Text className="font-bold font-nunito leading-[normal] 2xl:mt-[104px] 3xl:mt-[125px] lg:mt-[81px] xl:mt-[92px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-black_900 text-center w-[31%]">
              Your 2022-2023 <br />
              Volunteer Hours: 10
            </Text>
            <Column className="font-nunito lg:mt-[50px] xl:mt-[57px] 2xl:mt-[64px] 3xl:mt-[77px] w-[96%]">
              <Row className="items-center ml-[1px] w-[86%]">
                <Text className="font-bold mt-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Your Upcoming Activities:
                </Text>
                <Text className="font-bold mb-[1px] 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[78px] xl:ml-[89px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Recent Activity:
                </Text>
                <Text className="font-bold mb-[1px] lg:ml-[184px] xl:ml-[210px] 2xl:ml-[237px] 3xl:ml-[284px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Open Positions:
                </Text>
              </Row>
              <Row className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[30%]"
                  orientation="vertical"
                >
                  <Row className="bg-gray_100 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Column className="bg-gray_900 lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
                      <Text className="font-bold leading-[normal] mb-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[79%]">
                        Sep
                        <br />
                        25
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[1px] w-[82%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Location
                      </Text>
                      <Row className="mt-[1px] w-[100%]">
                        <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                          Event
                        </Text>
                        <Text className="font-semibold mb-[1px] lg:ml-[120px] xl:ml-[137px] 2xl:ml-[154px] 3xl:ml-[185px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-black_900 w-[auto]">
                          1hr
                        </Text>
                        <Button className="font-bold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[22%]">
                          Check in
                        </Button>
                      </Row>
                      <Text className="font-semibold mt-[3px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                        1:30pm - 2:30pm CST
                      </Text>
                    </Column>
                  </Row>
                </List>
                <Stack
                  className="bg-cover bg-repeat lg:h-[245px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] w-[1%]"
                  style={{ backgroundImage: "url('images/img_group2.svg')" }}
                >
                  <Img
                    src="images/img_group2.svg"
                    className="absolute lg:h-[245px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] w-[100%]"
                    alt="ScrollBar"
                  />
                </Stack>
                <Column className="items-center lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[30%]">
                  {events!=undefined && events['upcoming'] ? events['upcoming'].map((event) => (
                  <Row className="bg-gray_100 items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Column className="bg-gray_900 lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
                      <Text className="font-bold leading-[normal] mb-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[79%]">
                        {new Date(event['timestamp_start']).getMonth() + " " + new Date(event['timestamp_start']).getDay()}
                      </Text>
                    </Column>
                    <Column className="mt-[1px] w-[60%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        {event['location']}
                      </Text>
                      <Text className="font-bold mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                        {event['name']}
                      </Text>
                      <Text className="font-semibold mt-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                        {new Date(event['timestamp_start']).toLocaleDateString() + "-" + new Date(event['timestamp_start']).toLocaleDateString()}
                      </Text>
                    </Column>
                    <Img
                      src="images/img_hookg9c457be5d.png"
                      className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                      alt="hookg9c457be5d"
                    />
                  </Row>
                  )) : <h>Nothing to see here!</h>}
                </Column>
                <Img
                  src="images/img_group2.svg"
                  className="lg:h-[245px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[1%]"
                  alt="ScrollBar One"
                />
                <Column className="items-center lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] w-[30%]">
                  <Row className="bg-gray_100 items-center lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Column className="bg-gray_900 lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
                      <Text className="font-bold leading-[normal] mb-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[79%]">
                        Sep
                        <br />
                        25
                      </Text>
                    </Column>
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[1px] w-[62%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Baker Commons
                      </Text>
                      <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                        Baker Christmas Decoration
                      </Text>
                      <Text className="font-semibold lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                        8:00pm - 9:00pm CST
                      </Text>
                    </Column>
                  </Row>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                    orientation="vertical"
                  >
                    {events!=undefined && events['past'] ? events['past'].map((event) => (
                        <Row className="bg-gray_100 items-center justify-evenly lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
                          <Column className="bg-gray_900 lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] items-center lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius5 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[44px]">
                            <Text className="font-bold leading-[normal] mb-[3px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[79%]">
                              {new Date(event['timestamp_start']).getMonth() + " " + new Date(event['timestamp_start']).getDay()}
                            </Text>
                          </Column>
                          <Column className="mt-[1px] w-[60%]">
                            <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                              {event['location']}
                            </Text>
                            <Text className="font-bold mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                              {event['name']}
                            </Text>
                            <Text className="font-semibold mt-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                              {new Date(event['timestamp_start']).toLocaleDateString() + "-" + new Date(event['timestamp_start']).toLocaleDateString()}
                            </Text>
                          </Column>
                          <Img
                              src="images/img_hookg9c457be5d.png"
                              className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                              alt="hookg9c457be5d"
                          />
                        </Row>
                    )) : <h>Nothing to see here!</h>}
                  </List>
                </Column>
                <Img
                  src="images/img_group2.svg"
                  className="lg:h-[245px] xl:h-[281px] 2xl:h-[316px] 3xl:h-[379px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] w-[1%]"
                  alt="ScrollBar Two"
                />
              </Row>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default DashboardPage;
