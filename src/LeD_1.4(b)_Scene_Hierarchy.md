## Scene hierarchy

-  It displays all the objects composing a scene. Since scene objects are built in a hierarchy-like structure, the scene hierarchy displays a tree of this hierarchy, and individual elements can be expanded or collapsed by clicking on ` +` or ` - `  sign.
-  Objects in the scene hierarchy can be **dragged and dropped** onto another object, in order to create a **parent-child relationship**. refer figure 1

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(b)-Scene%20Hierarchy/Tutorial/LeD_1.4(b)_%20Figure_1.gif)

​                                                                                           *Figure:1 Scene hierarchy*

- In *Figure:5* ,we see that `arm_1 is a child of base`, `arm_2 is a child of arm_1`  
- For rigid link between parent and child , force sensors can be used i.e. Add `Force_sensor_1` as a child of `base` and `arm_1` as a child of `Force_sensor_1` and so on refer figure 2.
- ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(b)-Scene%20Hierarchy/Tutorial/LeD_1.4(b)_%20Figure_2.gif)

​                                                                          *Figure 2: adding force sensor in scene hierarchy*

## Grouping

- When we have a shape / body which consist of more than one primitive shape then we group them in a single shape.

- For grouping / ungrouping select all shapes you want to group with `ctrl` pressed and then right click and navigate to 

  `edit-->grouping/merging-->group/ ungroup selected shapes` refer figure 3. 

- You can always **ungroup** a grouped shape to restore the initial state. For more on grouping / merging refer [here](https://forum.coppeliarobotics.com/viewtopic.php?t=2545)

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.4-Object%20Properties%20and%20Scene%20hierarchy/LeD%201.4(b)-Scene%20Hierarchy/Tutorial/LeD_1.4(b)_Figure_3.gif)

​                                                                                   *Figure 3: grouping/ungrouping two shapes*

