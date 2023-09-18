import { useStore } from '../../hooks/store'
import { observer } from 'mobx-react-lite'
import React from 'react'

const HomePage = observer(() => {

  const { homeStore } = useStore();
  React.useEffect(() => {
    homeStore.init();
  }, []);

  return (
    <section className='flex flex-col w-full justify-center items-center gap-20'>
      <h1 className='text-signature'>Hello</h1>
    </section>
  )
});

export default HomePage;