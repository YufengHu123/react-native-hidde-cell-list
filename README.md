
# react-native-hidde-cell-list

## Getting started

### 此库在开发中,版本到达1.0.0 会发不稳定版本,最终实现支持 FlatList SectionList cell自定义 hiddeCell 自定义

`$ npm install react-native-hidde-cell-list --save`

### Mostly automatic installation

`$ react-native link react-native-hidde-cell-list`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-hidde-cell-list` and add `RNHiddeCellList.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNHiddeCellList.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNHiddeCellListPackage;` to the imports at the top of the file
  - Add `new RNHiddeCellListPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-hidde-cell-list'
  	project(':react-native-hidde-cell-list').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-hidde-cell-list/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-hidde-cell-list')
  	```
## Usage
```javascript
import RNHiddeCellList from 'react-native-hidde-cell-list';

// 持续更新中设计中,在1.0.0版本会发布稳定版
RNHiddeCellList;
```
