import * as React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {
  DefaultTheme,
  Provider as PaperProvider,
  Portal,
} from 'react-native-paper';

export default function MyBottomSheet() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}

// export default function App() {
//   const renderContent = () => (
//     <View
//       style={{
//         backgroundColor: 'white',
//         padding: 16,
//         height: 200,
//       }}>
//       <Text>Swipe down to close</Text>
//       <TextInput />
//     </View>
//   );

//   const sheetRef = React.useRef(null);

//   return (
//     <PaperProvider>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'papayawhip',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Button
//             title="Open Bottom Sheet 2.0"
//             onPress={() => sheetRef.current.snapTo(0)}
//           />
//         </View>
//         <BottomSheet
//           ref={sheetRef}
//           snapPoints={[450, 300, 0]}
//           borderRadius={20}
//           renderContent={renderContent}
//         />
//     </PaperProvider>
//   );
// }


//TODO:
// Check Portal first
// Check BottomNav Settings
// Check navigation