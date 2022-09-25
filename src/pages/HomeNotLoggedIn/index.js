import React, { useEffect } from "react";

import { Stack, Img, Column, Text, Row, Button } from "components";
import { auth } from "app/firebase";
import { signInWithGoogle } from "app/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { login } from "features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { instance, setAuth } from "api/api";


const HomeNotLoggedInPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
      if (user) {
          dispatch(login());
          navigate('/dashboard');
      }
  });

  const onClick = () => {
    signInWithGoogle().then(() => {
        const authUser = auth.currentUser;
        if (authUser) {
            authUser.getIdToken().then((token) => {
                console.log('set auth token');
                sessionStorage.setItem('authToken', token);
                setAuth(token);
                console.log(instance.defaults.headers.common['Authorization']);
            });
        } else {
            console.log('not able to set auth token');
        }
    });}

  if (loading) {
      return (<p>Loading login page...</p>);
  } else {
  
  return (
    <>
      <Stack className="bg-white_A700 font-nunito lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] w-[100%]">
        <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
          <Column className="absolute h-[max-content] inset-y-[0] items-center left-[5%] my-[auto] w-[25%]">
            <Text className="font-bold leading-[normal] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-black_900 w-[100%]">
              Rice Volunteering Tracker
            </Text>
            <Text className="font-bold leading-[normal] lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_601 w-[99%]">
              A Rice-dedicated site to standardizing volunteer hour tracking
            </Text>
          </Column>
        </Stack>
        <Column className="absolute font-inter inset-x-[0] mx-[auto] top-[4%] w-[95%]">
          <header className="w-[100%]">
            <Row className="w-[100%]">
              <Text className="cursor-pointer hover:font-bold font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Rice Volunteering
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[441px] xl:ml-[505px] 2xl:ml-[568px] 3xl:ml-[681px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Dashboard
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Leaderboard
              </Text>
              <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                Coordinate
              </Text>
              <Button
                className="font-bold lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center w-[7%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillPurpleA700"
                onClick={onClick}
              >
                Log In
              </Button>
            </Row>
          </header>
          <Button
            className="font-bold lg:ml-[205px] xl:ml-[235px] 2xl:ml-[264px] 3xl:ml-[317px] lg:mt-[342px] xl:mt-[391px] 2xl:mt-[440px] 3xl:mt-[528px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-center w-[9%]"
            shape="RoundedBorder10"
            size="lg"
            variant="FillPurpleA700"
            onClick={onClick}
          >
            Join Now
          </Button>
        </Column>
      </Stack>
    </>
  );
  }
};

export default HomeNotLoggedInPage;
