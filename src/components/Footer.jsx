import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
  Textarea,
  flexbox,
} from '@chakra-ui/react';
import React from 'react';
import { ImHeadphones } from "react-icons/im";
import { RiUserShared2Fill } from "react-icons/ri";
import {
  AiFillLinkedin,
  AiOutlineSend,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillMail,
  AiFillHome,
  AiOutlineArrowUp,
  AiFillPhone,
} from 'react-icons/ai';
import { FaUniversity, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiQuicktime } from "react-icons/si";
import { HashLink } from 'react-router-hash-link';
const Footer = () => {
  const styleItem = {
    display: 'flex',
    gap: '10',
    flexDirection: 'column',
  };
  const inputStyling = {
    outline: 'none',
    focus: 'none',
    focusBorderColor: 'none',
  };
  const goUp = () => {
    window.scrollTo(0, 0);
  };
  const viewSend = e => {
    const inputText = document.getElementById('inputText');
    const inputText2 = document.getElementById('inputText2');
    const sendBtn = document.getElementById('sendBtn');
    sendBtn.style.display = 'block';
    console.log('Form submitted');
    e.preventDefault();
    inputText.value = '';
    inputText2.value = '';
  };

  return (
    <Box
      h={'fit-content'}
      px={['5', '', '1', '10']}
      paddingBottom={['3', '2', '', '3']}
    >
      <Flex
        h={'full'}
        direction={['column-reverse', 'row-reverse', 'row-reverse', 'row']}
        flexWrap={['nowrap', 'wrap', 'wrap-reverse', 'nowrap']}
        justifyContent={['', 'space-between', 'space-between', '']}
        gap={['20', '10', '', '0']}
        id="contact"
        paddingBottom={'5'}
      >
        <VStack w={['full', 'full', 'full', 'full']} {...styleItem} spacing={4}>
          <Heading color={'purple.600'} fontSize={['32', '', '22', '32']} display={'flex'} alignItems={'center'} gap={'1rem'}>
          <ImHeadphones fontSize={'1.5rem'}/>Get in Touch 
          </Heading>
          <Text alignSelf={['', '', 'center', 'flex-start']}>
            Wanna talk with me? Just drop a message!
          </Text>
          <form action="">
            <Input
              {...inputStyling}
              type={'email'}
              required
              placeholder="Enter Your Email"
              id="inputText"
            />
            <Textarea
              {...inputStyling}
              mt={4}
              rows={4}
              id="inputText2"
              required
              placeholder="Enter message here"
            />
            <HStack gap={'10'}>
              <Button
                mt={4}
                type={'submit'}
                colorScheme="purple"
                variant={'outline'}
                gap={'8'}
                onClick={viewSend}
              >
                Send <AiOutlineSend />
              </Button>
              <p id="sendBtn" style={{ display: 'none' }}>
                Sending....
              </p>
            </HStack>
          </form>
        </VStack>

        <VStack w={['', '45%', '45%', 'full']} {...styleItem}>
          <Heading color={'purple.600'} fontSize={['32', '', '22', '32']} display={'flex'} alignItems={'center'} gap={'1rem'}>
           <SiQuicktime fontSize={'1.5rem'} /> Quick links
          </Heading>
          <Box {...styleItem} gap={'5'}>
            <VStack gap={'5'} fontWeight={'semibold'} alignItems={'flex-start'}>
              <HashLink to={'/#home'}>
                <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                  <AiFillHome /> Home
                </Flex>
              </HashLink>
              <HashLink to={'/#education'}>
                <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                  <FaUniversity /> Education
                </Flex>
              </HashLink>
              <HashLink to={'/#skills'}>
                <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                  <FaCode /> Skills
                </Flex>
              </HashLink>
              <HashLink to={'/#projects'}>
                <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                  <FaProjectDiagram /> Projects
                </Flex>
              </HashLink>
              <HashLink to={'/#contact'}>
                <Flex alignItems={'center'} gap={'5'} fontSize={'18'}>
                  <AiFillPhone /> Contact
                </Flex>
              </HashLink>
            </VStack>
          </Box>
        </VStack>

        <VStack w={['', '45%', '45%', 'full']} {...styleItem}>
          <Heading color={'purple.600'} fontSize={['32', '', '22', '32']} display={'flex'} alignItems={'center'} gap={'1rem'}>
          <RiUserShared2Fill   fontSize={'1.5rem'} />Social Handles
          </Heading>
          <Box {...styleItem} gap={'5'}>
            <a
              href="https://github.com/sushankg18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex gap={'2'} cursor={'pointer'}>
                <AiOutlineGithub size={'30'} />
                <Text fontWeight={'semibold'}>Github</Text>
              </Flex>
            </a>

            <a
              href="https://www.linkedin.com/in/sushank-gautam-a99685249/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex gap={'2'} cursor={'pointer'}>
                <AiFillLinkedin size={'30'} />
                <Text fontWeight={'semibold'}>Linkedin</Text>
              </Flex>
            </a>

            <a
              href="https://www.instagram.com/sushankk_gotnolife/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex gap={'2'} cursor={'pointer'}>
                <AiFillInstagram size={'30'} />
                <Text fontWeight={'semibold'}>Instagram</Text>
              </Flex>
            </a>

            <a
              href="https://wa.me/+918368433001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex gap={'2'} cursor={'pointer'}>
                <IoLogoWhatsapp size={'30'} />
                <Text fontWeight={'semibold'}>WhatsApp</Text>
              </Flex>
            </a>

            <a href={'mailto:sushankg4@gmail.com'} rel="noopener noreferrer">
              <Flex gap={'2'} cursor={'pointer'}>
                <AiFillMail size={'30'} />
                <Text fontWeight={'semibold'}>Email</Text>
              </Flex>
            </a>
          </Box>
        </VStack>
      </Flex>
      <Box w={'full'} {...styleItem} alignItems={'center'}>
        <AiOutlineArrowUp
          className="goupBtn"
          size={'48'}
          onClick={goUp}
          cursor={'pointer'}
        />

        <Text
          fontWeight={'semibold'}
          color={'purple.600'}
          fontSize={['9', '14']}
          letterSpacing={'widest'}
        >
          Designed by Sushank Gautam ❤️
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;