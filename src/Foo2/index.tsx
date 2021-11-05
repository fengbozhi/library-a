import { Column } from "anyg";
import React, { useEffect, useRef } from "react";

// export default ({ title }: { title: string }) => <h1>{title}</h1>;

 const Index = () => {
    let ref: any = useRef({});
  
    const data = [
      {
        type: "http://10.2.2.2/AAADFHSLDAFSDJAFJKJDSFSAdDFSDF",
        匿名共享访问量: 38,
        // toolip中显示非x,y轴数据的额外信息
        extra: [
          {
            key: "文件名",
            value: "anyshare"
          }
        ],
        bottom: [
          {
            key: "路径",
            value:
              "/一级路径/一级路径/一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径.docx"
          }
        ]
      },
      {
        type: "http://10.2.2.2/AAADFHSLDAFSDJAFJKDFASDFJDSFSADFSDF",
        匿名共享访问量: 38,
        // toolip中显示非x,y轴数据的额外信息
        extra: [
          {
            key: "文件名",
            value: "anyshare1"
          }
        ],
        bottom: [
          {
            key: "路径",
            value:
              "/一级路径/一级路径/一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径.docx"
          }
        ]
      },
      {
        type: "http://10.2.2.2/AAADFHSLDAFSDJAFJKDDSFDAFFASDFJDSFSADFSDF",
        匿名共享访问量: 52,
        // toolip中显示非x,y轴数据的额外信息
        extra: [
          {
            key: "文件名",
            value: "anyshare2"
          }
        ],
        bottom: [
          {
            key: "路径",
            value:
              "/一级路径/一级路径/一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径.docx"
          }
        ]
      },
      {
        type: "http://10.2.2.2/AAADFHSDSFSDASDJAFJKDDSFDAFFASDFJDSFSADFSDF",
        匿名共享访问量: 61,
        // toolip中显示非x,y轴数据的额外信息
        extra: [
          {
            key: "文件名",
            value: "anyshare3"
          }
        ],
        bottom: [
          {
            key: "路径",
            value:
              "/一级路径/一级路径/一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径.docx"
          }
        ]
      },
      {
        type: "http://10.2.2.2/AAADDSFSDFFHSLDAFSDJAFJKDDSFDAFFASDFJDSFSADFSDF",
        匿名共享访问量: 145,
        // toolip中显示非x,y轴数据的额外信息
        extra: [
          {
            key: "文件名",
            value: "anyshare3"
          }
        ],
        bottom: [
          {
            key: "路径",
            value:
              "/一级路径/一级路径/一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径.docx"
          }
        ]
      },
      {
        type: "http://10.2.2.2/AAADFHSLDAFSDJAFJKDDSFDAFFADSFDSFSDFJDSFSADFSDF",
        匿名共享访问量: 483,
        // toolip中显示非x,y轴数据的额外信息
        extra: [
          {
            key: "文件名",
            value: "anyshare4"
          }
        ],
        bottom: [
          {
            key: "路径",
            value:
              "/一级路径/一级路径/一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径一级路径.docx"
          }
        ]
      }
    ];
  
    useEffect(() => {
      const config:any = {
        xField: "type", // x轴
        yField: "匿名共享访问量", // y轴
        isLoading: false, // 是否正在请求数据
        lang: "zh-TW", // 国际化
        xAxis: {
          title: {
            text: "匿名共享链接"
          },
          label: null
        },
        yAxis: {
          title: {
            text: "匿名共享访问量（次）"
          }
        }
      };
  
      ref.current.col = new Column({ id: "column", data, config });
      ref.current.col.render();
    }, []);
  
    const load = () => {
      ref.current.col.update({ isLoading: true });
    };
  
    const donotLoad = () => {
      ref.current.col.update({ isLoading: false });
    };
  
    const loadData = () => {
      ref.current.col.changeData(data);
    };
  
    const loadNoData = () => {
      ref.current.col.changeData([]);
    };
  
    const changeLang = () => {
      ref.current.col.update({ lang: "en-US" });
    };
    return (
      <div className="App">
        <span onClick={load}>加载</span>
        <span onClick={donotLoad}>不加载</span>
        <span onClick={loadData}>有数据</span>
        <span onClick={loadNoData}>无数据</span>
        <span onClick={changeLang}>更改语言</span>
        <div id="column"></div>
      </div>
    );
  }

  export default Index