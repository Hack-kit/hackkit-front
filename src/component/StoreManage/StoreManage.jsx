import React from 'react';
import { Grid, Box , Button,Typography} from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SVG from '../../svg';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2)
  }));
const itemData = [
    { height: 160 , name:'식자재 관리' ,eng:'Food ingredients management', Icon: SVG.Administration},
    { height: 130, name:'리뷰관리', eng:'Review Management', Icon: SVG.User},
    { height: 160, name:'업주 공지사항', eng:'Notice', Icon: SVG.Choices },
    { height: 130, name:'식자재 등록', eng:'Food ingredient registeration', Icon: SVG.Information },
  ];


export default () => (
    <Box sx={{ width: "100%", minHeight: 600}}>
      <Masonry columns={2} spacing={6} >
        {itemData.map(({span, eng, height, Icon, name}, index) => (
          <MasonryItem key={index} columnSpan={span}>
            <Item sx={{ height }}>
                <div>
                    {name}{eng}
                <Icon css={{width:40,height:40}}/>
                </div>
            </Item>
          </MasonryItem>
        ))}
      </Masonry>
    </Box>
);
