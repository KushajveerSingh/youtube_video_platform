import type { NextPage } from 'next';

import { Feed, MetaTags } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <MetaTags
        title="Home - Youtube Video Platform"
        description="Fully responsive youtube clone application built using Youtube API with new video section, custom categories, responsive channel and video cards, video pages where you can play videos straight from the app and see related videos."
        url="https://github.com/KushajveerSingh/youtube_video_platform"
        image="/demo_image.png"
      />

      <Feed />
    </div>
  );
};

export default Home;
