import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Image,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { MdSchool } from "react-icons/md";
import img17 from '../assets/college-img.jpg';
import img18 from '../assets/KVPHOTO (1) (1).jpeg';
const Education = () => {
  return (
    <Box h={['fit-content', 'fit-content']} paddingTop={'24'} id="education">
      <VStack w={'full'} height={'full'} gap={'10'} >
        <VStack>
          <Heading color={'purple.600'} fontSize={['28', '32', '32', '40']} display={'flex'} alignItems={'center'} gap={'5'}>
            Education <MdSchool   />
          </Heading>
          <Text fontSize={['.8rem','','1rem','1.1rem']}>"Education is the catalyst for individual growth, unlocking doors to endless possibilities."</Text>
        </VStack>


        <VStack w={['100%','100%','100%','80%']} gap={['8', '12']} >
          <VStack w={'full'} p={['0', '3']} alignItems={'flex-start'} bgColor={'whitesmoke'}>
            <Flex direction={['row', '', 'row', 'row']} gap={'4'}>
              <Box w={['40', '', '28', '36']} h={['48', '', '40', '36']} >
                <Image w={'full'} h={'full'} objectFit={'cover'} src={img17}/>
              </Box>
              <VStack
                alignItems={'flex-start'}
                px={['0', '5']}
                gap={['2', '', '', '1']}
              >
                <Text fontWeight={'bold'} fontSize={['18', '24']}>
                  Institute of Professional Excellence and Management
                </Text>
                <Text fontWeight={'semibold'} fontSize={['16', '18']}>
                  Bachelor's of Computer Application (BCA)
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14', '18']} display={'flex'} gap={'1rem'}>
                  2022 - 2025 | <Text color={'purple'}> PURSUING</Text>
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14', '18']}>
                  Ghaziabad U.P.
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <VStack w={'full'} p={['0', '3']}  alignItems={'flex-start'} bgColor={'whitesmoke'}>
            <Flex direction={['row', '', 'row', 'row',]} gap={'2'}>
            <Box w={['24', '', '28', '36']} h={['40', '', '40', '36']} >
                <Image w={'full'} h={'full'} objectFit={'cover'} src={img18}/>
              </Box>
              <VStack alignItems={'flex-start'} px={['0', '5']} gap={['2', '', '', '1']}>
                <Text fontWeight={'bold'} fontSize={['18', '24']}>
                  Kendriya Vidyalaya Sangathan
                </Text>
                <Text fontWeight={'semibold'} fontSize={['16', '18']} display={'flex'} gap={'1rem'}>
                  I to XII Std | <Text color={'purple'}>CBSE</Text>
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14', '18']} display={'flex'} gap={'1rem'}>
                  2009 - 2022 | <Text color={'purple'}>COMPLETED</Text>
                </Text>
                <Text fontWeight={'semibold'} fontSize={['14', '18']}>
                  Ghaziabad U.P.
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Education;
