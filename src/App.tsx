/* eslint-disable import/no-named-as-default */
import { Routes, Route } from 'react-router';

import { Layout } from 'antd';
import { GlobalContextProvider } from 'src/context/global.context';
import CustomHeader from './components/commons/customHeader';
import CustomFooter from './components/commons/customFooter';
import CustomViewContainer from './components/commons/customViewContainer';
import { CompaniesContextProvider } from './context/companies.context';
import Companies from './components/company';
import GlobalStyles from './styles/global';
import { TableContextProvider } from './context/table.context';

const App = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <GlobalStyles />
      <CustomHeader />
      <Content>
        <Routes>
          <Route path='/'>
            <Route
              index
              element={
                <TableContextProvider>
                  <CompaniesContextProvider>
                    <GlobalContextProvider>
                      <CustomViewContainer>
                        <Companies />
                        <CustomFooter />
                      </CustomViewContainer>
                    </GlobalContextProvider>
                  </CompaniesContextProvider>
                </TableContextProvider>
              }
            />
            <Route
              path='companies'
              element={
                <TableContextProvider>
                  <CompaniesContextProvider>
                    <GlobalContextProvider>
                      <CustomViewContainer>
                        <Companies />
                        <CustomFooter />
                      </CustomViewContainer>
                    </GlobalContextProvider>
                  </CompaniesContextProvider>
                </TableContextProvider>
              }
            />

            <Route path='tasks' element={<CustomViewContainer>tasks table</CustomViewContainer>} />
            <Route
              path='activity'
              element={<CustomViewContainer>activity journals table</CustomViewContainer>}
            />
            <Route
              path='oportunities'
              element={<CustomViewContainer>oportunities table</CustomViewContainer>}
            />
            <Route
              path='quotes'
              element={<CustomViewContainer>quotes table</CustomViewContainer>}
            />
            <Route
              path='messages'
              element={<CustomViewContainer>messages table</CustomViewContainer>}
            />
          </Route>
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
