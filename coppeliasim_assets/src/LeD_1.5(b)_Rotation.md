# Rotation

- This section explains about the **Euler Angles** and **different rotation operations** on objects.

## Euler Angles

- Euler Angles are **three angles** which are used to **describe the orientation** of a rigid body. 

- In CoppeliaSim, the three Euler Angles are **alpha, beta and gamma**.    

-   The equation below shows the Euler angles **convention** in CoppeliaSim,  where Rx, Ry and Rz represent **elemental rotations** about axes x, y and z respectively, of the **absolute** reference frame  .  

  

  ​                                                                            ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Tutorial/LeD_1.5(b)_%20Figure_1.jpg)    

​                                                                                                *Figure 1:Convention Equation* 

## Orientation Manipulation

> **NOTE** : Make sure that you have gone through the tutorials for position manipulation before you proceed further



The `Object/item rotate` button in the toolbar can be used for the orientation manipulation operations.

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Tutorial/LeD_1.5(b)_%20Figure_2.png)

​																	                	*Figure 2: Object/item rotate button*

A **dialog box** appears after clicking this button. There are **3 distinct tabs** in this dialog box.

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Tutorial/LeD_1.5(b)_%20Figure_3.jpg)

​															                        	*Figure 3: Orientation dialog box*

### a) Mouse Rotation 

- This operation is similar to **mouse translation**, but instead of translation, **rotation is achieved** here.

- **Mouse drag** allows rotating the selected object **along preferred axes** of the selected reference frame.

- Select the object by **right clicking** on it before applying rotation.

- Here also the **movement differs** with respect to **different frames**. Refer Figure 4 in position manipulation.

- The parent child dependency affects the rotation. When the **parent is rotated**, child will also rotate along with it as if they are a single object. Refer figure 5 in position manipulation.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Tutorial/LeD_1.5(b)_%20Figure_4.gif)

  ​                                                                                    *Figure 4: Mouse rotation of a cuboid*

### b) Orientation

- This operation is similar to **positioning** in position manipulation, but instead of coordinates, here **angles** are provided.

- This is for achieving more **precise object orientation**.

- Here the values of **alpha, beta and gamma** angles are provided , the object will get **oriented** according to the values relative to the **selected reference frame**.

- Similar to translation the **angles of other objects** can be applied to an object by the `Apply to selection` button in the dialog box. Selection can be applied to **individual axis** also by using the separate apply buttons. Refer figure 7 in position manipulation tutorial.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Tutorial/LeD_1.5(b)_%20Figure_5.gif)

  ​                                                                                  *Figure 5: Orientation operation*

### c) Rotation

- This is similar to **mouse rotation**, but here instead of dragging the mouse, the **degree** to which the object should be rotated is given.

- If +45 degree is given in alpha, the object will rotate 45 clockwise around x axis. If negative angle is given rotation will be counter clockwise.

- More **precise rotation** can achieved.

- Provide the angle to be rotated in the respective boxes of the axes, then click the `Rotate Selection` button.

- Rotation can be done in a **single axis** by clicking the respective axis's **rotate selection button**.

  ![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.5-Translation%20and%20Rotation/LeD%201.5(b)-Rotation/Tutorial/LeD_1.5(b)_%20Figure_6.gif)

  ​                                                                                      *Figure 6: Rotation of a cuboid*

-----------------------------------------------------------------------------------------------------------------------------------------------------------

