
# react-native-hidde-cell-list

## Getting started

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

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNHiddeCellList.sln` in `node_modules/react-native-hidde-cell-list/windows/RNHiddeCellList.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Hidde.Cell.List.RNHiddeCellList;` to the usings at the top of the file
  - Add `new RNHiddeCellListPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNHiddeCellList from 'react-native-hidde-cell-list';

// TODO: What to do with the module?
RNHiddeCellList;
```
  