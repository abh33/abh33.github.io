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

## Scene Hierarchy - Transcript

- Hello guys ,welcome to the tutorials on CoppeliaSim, In this session we will learn about what is **Scene hierarchy **
- We will learn how to form **Parent -Child relationship** in CoppeliaSim and how it works 

**lets get started**

1. So we will add few primitive shapes in the scene say three cuboids and we will create structure and will learn how scene hierarchy works.

2. After adding these shapes add sensors/joints according to the need for making a structure that you want from these shapes.

3. In our case we are adding Force sensor to provide Rigid link. 

4. Rename these shapes for a better understanding and clean hierarchy in our case **base , arm_1 , arm_2** and set **base as static**. refer Figure 1.![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(b)-Scene%20Hierarchy/Transcript/LeD_1.4(b)_Transcript_%20Figure_1.JPG)

   ​                                                                             *Figure 1: Basic structure and shapes used*  

5. We can make a **parent-child** relation just by **drag and drop** , for example if we want to make **`arm_1` as a child of `base`** then just **drag `arm_1`** from scene hierarchy and **drop over `base`**. refer Figure 2.

6. Now `base` and `arm_1` is in parent-child relationship i.e. `base` is **parent** and `arm_1` is **child**. and similarly for `arm_1` and `arm_2` i.e. `arm_2` is a child of `arm_1`.refer Figure 2.![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(b)-Scene%20Hierarchy/Transcript/LeD_1.4(b)_Transcript_%20Figure_2.gif)

   ​                                                                        *Figure 2: parent-child relationship formation*

7. As we you can see the structure fall after running simulation so for a rigid link we will add Force sensor between `base`  and `arm_1`. similarly between `arm_1` and `arm_2` refer **tutorials on Force sensor**

8. So now `base` has **child** `Force_sensor_1` and `Force_sensor_1` has **child** `arm_1` and so on .refer Figure 3.![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(b)-Scene%20Hierarchy/Transcript/LeD_1.4(b)_Transcript_%20Figure_3.gif)

   ​                                                                                   *Figure 3: Adding force sensor in hierarchy*

   

   ## Grouping
   
   - When we have a shape / body which consist of more than one primitive shape then we group them in a single shape.
   - For grouping / ungrouping select all shapes you want to group with `ctrl` pressed and then right click and navigate to `edit-->grouping/merging-->group/ ungroup selected shapes`
   - when you group two shapes of different color and attribute, you obtain a *grouped shape* with different colors and attributes refer Figure 4.
   - You can always **ungroup** a grouped shape to restore the initial state.
   - For more on grouping / merging refer [here](https://forum.coppeliarobotics.com/viewtopic.php?t=2545)
   
   ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(b)-Scene%20Hierarchy/Transcript/LeD_1.4(b)_Transcript_%20Figure_4.gif)
   
   ​                                                                 *Figure 4: grouping / ungrouping two primitive shapes*
   
   
   
   -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**References**

- [Coppelia Robotics](https://www.coppeliarobotics.com/)

