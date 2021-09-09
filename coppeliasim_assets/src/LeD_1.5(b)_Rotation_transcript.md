# Rotation (Transcript)

- Hello guys.

- Welcome to another tutorial on the course "**Introduction to CoppeliaSim**" .

- In this session, we will learn to apply **different rotation operations** on objects.

- We will also explain about the Euler Angles.

- So, let's get started with the definition of Euler Angles.

- Euler Angles are **three angles** which are used to **describe the orientation** of a rigid body. 

- In CoppeliaSim, the three Euler Angles are **alpha, beta and gamma**.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Transcript/LeD_1.5(b)_%20Figure_1.jpg)

  ​														                              *Figure 1:Convention Equation* 

  -----------------------------------------------------------------------------------------------------------------------------------------------------

  **Quick Question**

  *Which among the below is not a Euler angle in CoppeliaSim?*

  - [ ] *theta*
  - [ ] *alpha*
  - [ ] *gamma*
  - [ ] *beta*

- Let's move on to the **orientation manipulation** part.

-  Since some of the things in this session are already covered in the translation part and most of the things are similar, some portions are avoided here. Watch the tutorial for Translation before diving into this.

- First add a **cuboid** to the scene. Before applying the operations we have to select the object.

- Then we have to select the **Object/item rotate button** in the toolbar.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Transcript/LeD_1.5(b)_%20Figure_2.png)

  ​										                                         *Figure 2: Object/item rotate button* 

- Now we can see a **dialog box** in the screen. There are **3 distinct tabs** in this. Let's see the use of each one in detail.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Transcript/LeD_1.5(b)_%20Figure_3.jpg)

  ​                                                                                    *Figure 3: Orientation dialog box*

- First one is **mouse rotation**.

- This operation is similar to **mouse translation**, but instead of translation, **rotation is achieved** here.

- Here also we can select the **reference frame**. This time let's choose the **world frame**.

- Now **drag the mouse** in the direction in which you want to **rotate** the cuboid.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Transcript/LeD_1.5(b)_%20Figure_4.gif)

  ​                                                                                 *Figure 4: Mouse rotation of a cuboid*

- Here also the **movement differs** with respect to **different frames**.

- The parent child dependency affects the rotation. When the **parent is rotated**, child will also rotate along with it as if they are a single object.

- **Rotation size** can also be adjusted.

- Next tab is the **orientation tab**.

-  This operation is similar to **positioning** in position manipulation, but instead of coordinates, here we have to give **angles** .

- This is for achieving more **precise object orientation**.

- Let's give some values to alpha, beta and gamma angles. Now you can see the cuboid is getting oriented according to the values relative to the **selected reference frame** which here is world frame.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Transcript/LeD_1.5(b)_%20Figure_5.gif)

​                                                                                           *Figure 5: Orientation operation*     

- The last tab is **rotation**.

- This is similar to **mouse rotation**, but here instead of dragging the mouse, the **degree** to which the object should be rotated is given.

- If +45 degree is given in alpha, the object will rotate 45 degree clockwise around x axis. If negative angle is given rotation will be counter clockwise.

- The advantage of this is more **precise rotation** can achieved.

- Now let's give some angles. 

- We can see that **cuboid** is getting rotated according to the **angles** given.

- Rotation can be done in a **single axis** by clicking the respective axis's **rotate selection button**.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Transcript/LeD_1.5(b)_%20Figure_6.gif)

​                                                                                             *Figure 6: Rotation of a cuboid*  

---------------------------------------------------------------------------------------------------------------------------------------------------------

**Quick Question**

​    *How  many tabs are there in the object rotation dialog box?*

- [ ] *2*
- [ ] *3*
- [ ] *4*
- [ ] *5*

So that's all about rotation operations. Thank you all! See you in the next tutorial.

-----------------------------------------------------------------------------------------------------------------------------------------------------------



