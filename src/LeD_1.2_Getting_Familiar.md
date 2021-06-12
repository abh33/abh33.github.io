<!-- <center><img src="http://mooc.e-yantra.org/img/eYantra_logo.svg" alt="e-yantra_logo" style="scale:75%;" /></center> -->

<style>
.back{
	position: fixed;
	width: 250px;
	height: 250px;
	top: 50%;
	left: 50%;
    margin-top: auto; 
    margin-left: auto; 
	opacity: 0.15;
    z-index: -1;
	}
</style>



<!-- <img src="http://mooc.e-yantra.org/img/EyantraLogoMini.png" class="back"> -->

#             Getting familiar with CoppeliaSim

- This session introduces the basics of CoppeliaSim software and its main features
- The content includes the use of different tools and their uses, concepts of page, views and scenes , camera navigation etc.

## Camera Navigation

- Camera is used for viewing. 
- It can be used for looking at a view from a desired angle. 
- There is a default camera in the scene through which we can view the scene. We can add more cameras as well.

#### Camera navigation toolbar

| Toolbar Buttons                                              | Use                                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_1.png) | for pan movement, i.e  for shifting the camera perpendicular to view direction |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_2.png) | for rotating the camera                                      |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_3.png) | for zoom effect in the direction of view                     |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_4.png) | Perspective projection - adjust camera view angle                                                             Orthogonal projection -adjust the view size of camera view |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_5.png) | Adjust the camera view to fit all the objects if nothing is selected or the selected object if a particular object is selected |

​                                                     *Table 1: Camera Navigation Tools*



![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_6.gif)

​                                                                   *Figure 1: Camera Navigation*

For additional reading , go through the CoppeliaSim [manual](https://www.coppeliarobotics.com/helpFiles/en/cameras.htm).

##  Scenes and Models

- Scene comprises of cameras, lights, views, pages, the environment, floor, scripts, other objects added etc. 

- A model is a sub-element of scene.

- Scene may contain a number of models.

- Scenes are saved in ".ttt"-files, and models are saved in ".ttm"-files.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_7.jpg)

  ​                                                                      *Figure 2: Scene selection button*

- Navigation between scenes can be done with the help of scene selection tool.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_8.gif)

  ​                                                                      *Figure 3: Scene selection*



## Pages and Views

- Pages contains one or several views. It is the main viewing surface of the scene.

- View is used to display the image of a specific object from a viewing angle.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_9.jpg)

  ​                                                                     *Figure 4: Page selection button*

- Different pages can be selected using page selector button.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_10.gif)

  ​                                                                  *Figure 5: Page selection*

## Simulation tools

- There are a lot of simulation features in CoppeliaSim. 
- Most important is the concept of **simulation time** and **real time**. Simulation time is always constant.   
- The **real time** is the **actual time**. It tells us how the same simulation is happening in the actual time.
- The **real time factor** (RTF) compares the simulation and actual time. Its value is between 0 and 1. If RTF is 1, there is no lag between simulation and actual time. 
- The default **step size** of which is **dt =50 ms**. We can change this and other simulation properties in the **simulation settings**.

| Toolbar buttons                                              | Use                                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_11.png) | For starting the simulation                                  |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_12.png) | For pausing the simulation                                   |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_13.png) | For stopping the simulation                                  |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_14.png) | For switching to real time instead of simulation time        |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_15.png) | For slowing down the simulation                              |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_16.png) | For speeding the simulation                                  |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_17.png) | For setting simulation features such as step size, multiplication factor etc. |

​                                                                  *Table 2: Simulation Tools*

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_18.gif)

​                                                                       *Figure 6: Simulation Demo*

## Other tools



| Tool                                                         | Use                                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_19.png) | If this tool is selected we can select the objects by clicking on them |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_20.png) | For position manipulations like shifting, positioning etc.   |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_21.png) | For rotation manipulations like rotation, orientation etc    |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_22.png) | It erases the last action performed                          |
| ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.1-Getting%20Familiar%20with%20CoppeliaSim/Tutorial/LeD%201.2_Figure_23.png) | It restores the action previously erased by undo             |

​                                *Table 3: Other important tools*

----------------------------------------------------------------------------------------------------------------------------------------------------------































