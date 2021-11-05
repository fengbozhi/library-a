import React from 'react';
import { Button } from 'antd'
import 'antd/dist/antd.less'
import './index.less';

export default ({ title }: { title: string }) => <Button className="tat">{title}</Button>;
