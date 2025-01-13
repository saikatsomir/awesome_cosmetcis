import { SharedBlog } from '../../Shared/SharedBlog/SharedBlog';
import { Subscription } from '../../Shared/Subscription/Subscription';
import { Banner } from '../Banner/Banner';
import { SalesLink } from '../SalesLink/SalesLink';
import { Sales } from './Sales/Sales';

export const Home = () => {
  return (
    <>
      <Banner />
      <SalesLink />
      <Sales />
      <SharedBlog />
      <Subscription />
    </>
  );
};
