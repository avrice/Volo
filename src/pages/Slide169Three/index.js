import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "app/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Stack, Img, Column, Row, Text, Button } from "components";
import { login } from "features/auth/authSlice";

const Slide169ThreePage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(login());
      navigate('/dashboard');
    }
  });

  if (loading) {
    return <p>Loading...</p>
  } else {

  return (
    <>
      <Stack className="bg-white_A700 font-inter lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] w-[100%]">
        <Stack
          className="absolute bg-cover bg-repeat lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] lg:px-[40px] xl:px-[46px] 2xl:px-[52px] 3xl:px-[63px] w-[100%]"
          style={{ backgroundImage: "url('images/img_87311.png')" }}
        >
          <Img
            src="images/img_layerx00201.svg"
            className="absolute bottom-[3%] lg:h-[449px] xl:h-[514px] 2xl:h-[578px] 3xl:h-[693px] right-[0] w-[75%]"
            alt="Layerx00201"
          />
        </Stack>
        <Column className="absolute inset-x-[0] mx-[auto] top-[4%] w-[95%]">
          <header className="w-[100%]">
            <Row className="w-[100%]">
              <Text className="cursor-pointer hover:font-bold font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Rice Volunteering
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[485px] xl:ml-[555px] 2xl:ml-[624px] 3xl:ml-[749px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Coordinate
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Leaderboard
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Calendar
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Tracker
              </Text>
              <Button className="font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center w-[7%]"
                onClick={() => {
                  signInWithGoogle().then(() => {
                      const authUser = auth.currentUser;
                      if (authUser) {
                          authUser.getIdToken().then((token) => {
                              console.log('set auth token');
                              sessionStorage.setItem('authToken', token);
                          });
                      } else {
                          console.log('not able to set auth token');
                      }
                  });
              }}>
                Log In
              </Button>
            </Row>
          </header>
          <Column className="font-nunito items-center lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mt-[166px] xl:mt-[190px] 2xl:mt-[213px] 3xl:mt-[256px] w-[27%]">
            <Text className="font-bold leading-[normal] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-black_900 w-[100%]">
              Rice Volunteering Tracker
            </Text>
            <Text className="font-bold leading-[normal] lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_600 w-[99%]">
              A Rice-dedicated site to standardizing volunteer hour tracking
            </Text>
          </Column>
        </Column>
      </Stack>
    </>
  );

  }
};

export default Slide169ThreePage;
