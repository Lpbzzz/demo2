import request from '@/utils/request';

export async function pullData(place='北京') {
  return request('http://saweather.market.alicloudapi.com/day15?area='+place,{
    method:'get',
    headers:{
      Authorization:'APPCODE b5e8688d4e1144e994ef0b1527a4db3f'
    },
  });
}
