import React from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';


function showHTML(strings) {
  const html = { __html: strings };
  return <div dangerouslySetInnerHTML={html}/>;
}

function Fly(props) {

  const pullData = () => {
    props.dispatch({
      type: 'fly/pullData',
      payload:'南京'
    });
  };
  const clearData=()=>{
    props.dispatch({
      type:'fly/clearData'
    })
  }



  return (
    <div>
      <button onClick={() => {
        pullData();
      }}>去请求参数咯~
      </button>
      <button onClick={()=>{
        clearData()
      }}>
        清理一下数据~
      </button>

      <h3>地址：{props.fly.apiBody.area}</h3>
      <h3>id：{props.fly.apiBody.areaid}</h3>
      <h3>天气情况：</h3>
      <ul>
        {
          !!props.fly.apiBody.dayList.length && props.fly.apiBody.dayList.map(e => {
            return <li>{Object.keys(e)
              .map(j => {
                return `--${e[j]}--`;
              })}</li>;
          })
        }
      </ul>


      <br/>
      <br/>
      <br/>

      {
        formatMessage({
          id: 'lyric.title',
          defaultMessage: '歌曲名',
        })
      }

      <div>
        {
          showHTML(formatMessage({
            id: 'lyric.body',
            defaultMessage: '歌词',
          }))
        }
      </div>
    </div>
  );
}

export default connect(({ fly }) => {
  return { fly };
}, null)(Fly);
