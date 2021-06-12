# Translation (Transcript)

- Hello guys.

- Welcome to another tutorial on the course "**Introduction to CoppeliaSim**" .

- In this session, we will learn to apply **different translation operations** on objects.

- We will also cover different types of **reference frames** in this tutorial.

- In CoppeliaSim, coordinate system has **3 axes- x-, y- and z-axis**, corresponding to the **red, green and blue arrows** respectively.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Transcript/LeD_1.5(a)_%20Figure_1.png)

  ​														                              *Figure 1: Co-ordinate system*

- There are  **3 reference frames ** in CoppeliaSim. They are **World Frame, Parent Frame and Own Frame**.

- Let's see what each represent.

- Look at the bottom right corner of the scene, you can see three arrows there. This is the **world frame**.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Transcript/LeD_1.5(a)_%20Figure_2.png)

  ​                                                                                *Figure 2: Object/item shift button*                                                                      

- This frame is an **absolute** reference frame. 

- Now let's add a **cuboid** to the scene. You can see different arrows coming outside the cuboid. It is originating from its **geometrical center**.  

- This is the shape's own frame which is located at its **geometric center**.

- Now let's add a **sphere** as the **child** of cuboid. 

- In the case of sphere, the frame of reference of the cuboid is its **parent frame**. i.e. Parent frame is the reference frame of the **parent of an object**.

  -----------------------------------------------------------------------------------------------------------------------------------------------------

  **Quick Question**

  *Which color represents y axis in the CoppeliaSim?*

  - [ ] *red*
  - [ ] *yellow*
  - [ ] *blue*
  - [ ] *green*

  

- So that's all about **reference frames**. Let's move on to the **position manipulation** part.

- Before applying the operations we have to select the object. So **right click** on the sphere. 

- First we have to select the **Object/item shift button** in the toolbar.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Transcript/LeD_1.5(a)_%20Figure_3.png)

  ​                                                                                        *Figure 3: Position dialog box*

- Now we can see a **dialog box** in the screen. There are **4 distinct tabs** in this. Let's see the use of each one in detail.

- First one is **mouse translation**. Click on that and we can see that there are options for selecting the frame of reference. 

- We can select the  **reference frame** with respect to which we want to perform the **translation operation**. Choose the own frame option for now.

- After that there are options for **selecting the axis**, we can select either a **single** axis or a **combination** of 2 axes. Now select x and y axes.

- Drag the mouse and you can see the sphere moving along **x-y plane** with respect to its **own frame**.

- Next let's see how movement differs, with respect to different **frame of references**.

- Keep the **preferred axis** as z and move the sphere with respect to different frames, one by one.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Transcript/LeD_1.5(a)_%20Figure_4.gif)

​                                                                                   *Figure 4: Mouse translation in different frames*               

- Here we can see that even though the sphere is moved along z axis always, the **movement differs** with respect to **different frames**.

- Another important thing to notice here is , when the **parent is moved**, child will also move along with it as if they are a **single object**. Select the **cuboid** and move along x-y plane. Now the **sphere** will also move along the cuboid.

    ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Transcript/LeD_1.5(a)_%20Figure_5.gif)

  ​                                                                                    *Figure 5: Mouse translation of  parent*  

  

  -----------------------------------------------------------------------------------------------------------------------------------------------------

  **Quick Question**

  *How many tabs are there in the object shift dialog box?*

  - [ ] *2*
  - [ ] *3*
  - [ ] *4*
  - [ ] *5*

  

- Let's move to the next tab which is the **position** tab. This is for achieving more **precise positioning**.

- Keep the **cuboid** in the screen and **remove** the sphere. You can do that by right clicking on the sphere and select edit , then click the **delete selected objects** option.

- In the position tab we can give the **x, y and z coordinates** and the **object shifts** to that position with its **geometric center** as the given coordinate.

- Let's see how it works. Select the cuboid, then select the **position tab** from **object shift button**.

-  Then give some **values** in the coordinate columns. You can choose the reference frame.

- Press enter and the cuboid shifts to another position.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Transcript/LeD_1.5(a)_%20Figure_6.gif)

​                                                                                                 *Figure 6: Positioning of a cuboid*

- Now add a sphere to the scene. If you want to shift the cuboid to the same position as that of sphere, Select the **cuboid**, then **press shift** and select the **sphere** . Then click the `Apply to selection` button.

- **Individual axis** shifting can also be done by clicking the respective apply to selection button. We can try that also to shift the **cuboid**.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Transcript/LeD_1.5(a)_%20Figure_7.gif)

  ​                                                          *Figure 7: Shifting an object to the coordinates of another object*

- Let's move to the next tab which is **translation**. This is similar to the **mouse translation**,  but here instead of dragging the mouse the **amount** to which the object should be shifted is given.

- i.e. If we give +1m in the x axis, the object will shift 1m along the positive x axis with respect to the selected frame.

- With this we can achieve more **precise translation**.

- Delete the cuboid from the scene, and let's apply some **translation** on the sphere.

- We have to give the amount to be shifted in the respective boxes of the axes, then click the `Translate Selection` button.

- Translation can be done in a **single axis** by clicking the respective axis's **translation selection button**.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(a)-Translation/Transcript/LeD_1.5(a)_%20Figure_8.gif)

  ​                                                                   *Figure 8: Translation of a sphere*

  -----------------------------------------------------------------------------------------------------------------------------------------------------

  **Quick Question**

  *If 5 m is given in the x axis of translation tab, what happens to the object?*

  - [ ] *the object will shift 1m along the negative x axis with respect to world frame.*
  - [ ] *the object will get positioned at x coordinate 1m .*
  - [ ] *the object will shift 1m along the positive x axis with respect to world frame.*
  - [ ] *the object will shift 1m along the Positive x axis with respect to the selected frame.*

  

- There is one more tab left, which is **position scaling**.

- Now the sphere is placed at 0.1m along z axis. Let's change the **position scaling value** of z axis to 0.5, now we can see the position of the sphere along z axis changes to 0.1m*0.5, i.e. 0.05m.

- So that's all about Translation operations. Thank you all! See you in the next tutorial.

  -----------------------------------------------------------------------------------------------------------------------------------------------------

  