# Position Manipulation

- This  section explains how to apply different translation operations on objects.
-  This section also includes the comparison between different reference frames.

## Different Reference Frames

- The coordinate system has **3 axes- x-, y- and z-axis**, corresponding to the **red, green and blue arrows** respectively. 

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Tutorial/LeD_1.5(a)_%20Figure_1.png)

  ​                                                                                       *Figure 1: Co-ordinate system*

- A **bounding box** is an area that bounds the shape entirely.  The reference frame of bounding box is aligned with the reference frame of the shape.

  

There are  **3 reference frames ** in CoppeliaSim.

1.  **World frame** : This frame is an **absolute** reference frame. This can be seen at the **bottom right corner** of the scene.
2. **Parent frame**: This is the reference frame of the **parent of an object**.
3. **Own frame**: This is the shape's own frame which is located at its **geometric center**.

## Position dialog 

The `Object/item shift button` in the toolbar can be used for the position manipulation operations.

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Tutorial/LeD_1.5(a)_%20Figure_2.png)

​                                                                                        *Figure 2: Object/item shift button*

A **dialog box** appears after clicking this button. There are **4 distinct tabs** in this dialog box.



![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Tutorial/LeD_1.5(a)_%20Figure_3.png)

​                                                                                         *Figure 3: Position dialog box*

### a) Mouse Translation

- The **reference frame** with respect to which the **translation operation** to be performed can be selected.
- **Mouse drag** allows translating the selected object **along preferred axes** of the selected reference frame.
- Translation **step size** can be adjusted. For **fine movements** smaller step sizes can be selected.
- Select the object by **right clicking** on it before applying translation.

The below gif shows the **mouse translation** of objects with respect to **different reference frames** along z axis (look at the blue arrows). In this scene, sphere and cuboid are added as **non pure shapes** (Read more about non pure shapes [here](https://www.coppeliarobotics.com/helpFiles/en/shapes.htm) ) having a **random reference frame** different from world frame. Cuboid is the parent of sphere. 

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Tutorial/LeD_1.5(a)_%20Figure_4.gif)

​                                                                                 *Figure 4: Mouse translation different frames*

- Here we can see that even though the sphere is moved along z axis always, the **movement differs** with respect to **different frames**.
- When the **parent is moved**, child will also move along with it as if they are a single object. See the below gif.

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Tutorial/LeD_1.5(a)_%20Figure_5.gif)

​													                                 *Figure 5: Mouse translation of  parent*



### b) Position

- This is for achieving more **precise positioning**.

- Here x, y and z **coordinates **are given and the **object shifts** to that position with its **geometric center** as the given coordinate.

- This operation can also be done with respect to different frames. Coordinates are **relative** to the reference frames.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Tutorial/LeD_1.5(a)_%20Figure_6.gif)

  ​												                                        	*Figure 6: Positioning of a cuboid*

- The **coordinates of other objects** can be applied to an object by the `Apply to selection` button in the dialog box. Selection can be applied to **individual axis** also by using the separate apply buttons.

- Select the **object to be shifted**, then **press shift** and select the **other object** to where the first object is  going to be shifted. Then click the `Apply to selection` button. 

- See the below gif . Here the cuboid is shifted to the coordinates of sphere in two ways.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Tutorial/LeD_1.5(a)_%20Figure_7.gif)

​                                                                   *Figure 7: Shifting an object to the coordinates of another object*

### c) Translation

- This is similar to **mouse translation**, but here instead of dragging the mouse the **amount** to which the object should be shifted is given.

- If +1m is given in the x axis, the object will shift 1m along the positive x axis.

- More **precise translation** can achieved.

- Provide the amount to be shifted in the respective boxes of the axes, then click the `Translate Selection` button.

- Translation can be done in a **single axis** by clicking the respective axis's **translation selection button**.

  

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Tutorial/LeD_1.5(a)_%20Figure_8.gif)

  ​													                           *Figure 8: Translation of a sphere*

### d) Position Scaling

- **Precise scaling** of object's position can be achieved.
- If the object was placed at 0.1m along z axis initially, and the position scaling value of z axis is changed to 0.5, the position of the object along z axis changes to 0.1m*0.5, i.e. 0.05m.
- This depends on the **frame of the reference**.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

