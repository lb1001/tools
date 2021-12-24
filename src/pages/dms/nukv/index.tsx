import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import Monaco from 'react-monaco-editor';

const TableList: React.FC = () => {
  /** 国际化配置 */

  return (
    <PageContainer content="该工具用于通过Key查询 NuKV缓存数据">
      <ProCard layout="center" style={{ marginBottom: 24, height: 800 }}>
        <Monaco language="json" theme={'vs-dark'}></Monaco>
      </ProCard>
    </PageContainer>
  );
};

export default TableList;
