import { useState } from 'react'
import { Toast } from '@capacitor/toast';
import { Device } from '@capacitor/device';


const showHelloToast = async () => {
  await Toast.show({
    text: 'Hello!!!!!!',
  });
};

const logBatteryInfo = async () => {
  const info = await Device.getBatteryInfo();

  await Toast.show({
    text: JSON.stringify(info),
  });
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div onClick={logBatteryInfo} className="w-[50px] h-[150px] bg-[#afafaf]"></div>
    </div>
  )
}

export default App
