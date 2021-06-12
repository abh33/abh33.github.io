## Joints and force sensor(transcript)

- hello guys ,welcome to the tutorials on coppeliasim, In this session we will learn about different types of joints present in coppeliasim and their properties
- At the end of this session we will also learn about force sensor and its properties.

**lets get started**

A joint is a link between two bodies that allow movement between them. In coppeliasim three joints are there having different properties .Now we will see how to add joint and change their properties.

1. After launching coppeliasim ,click on **add** button present in menu bar and then click on add then click on joints and you will see Three joints named as **revolute , prismatic and spherical joints** .
2. click any of one of them and the joint will be added to the scene In my case I am adding revolute joint now you will see joint name in scene hierarchy window.
3. when you double-click on the icon of the joint you added, scene object properties window will open from here you can change properties of joint you added such as **length ,diameter, mode** etc.
4. In this window click on show dynamic properties and joint dynamic properties will open, here you can see different properties related to motion of joint such as motor enabled, target velocity,maximum torque, control loop enabled.
5. Now I will explain each property one by one. lets add two primitive shapes say two cuboids one of height(z) 0.5m and other of length(x or y) 0.5m and rename them as shape_1 and shape_2 respectively.
6. Now make a T-shape structure by translating shape_2 on shape_1 ,remember that shape_1 should be set as static (uncheck body is dynamic) refer tutorial on **Object properties**
7. Revolute joint that we added must be translated to axis of rotation we want refer figure 1.
8. Make a hierarchy by adding revolute_joint as a child of shape_1 and shape_2 as a child of revolute_joint. You can make parent child relation by drag and drop in scene hierarchy refer figure 1.
9. Now run simulation and open dynamic properties and check motor enabled, enter **target velocity as 10deg/sec** and  maximum torque , we will use default value of torque and target velocity is the velocity by which joint will rotate. 
10. After pressing enter you will see the upper part rotating and make target velocity to zero to stop. refer figure 1.
11. If you check control loop enabled then you can control the joint using different API function that you will learn in upcoming tutorials.

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.6-Joints%20and%20Force%20Sensor/Transcript/LeD_1.6_Transcript_%20Figure_1.gif)

​                                                                  Figure 1: Revolute joint motion

**Reflection Spot**

Why there are **Three** types of joint in coppeliasim ?can you point out difference between them?

> So basically ,revolute and spherical joint are used for rotational movement and have but prismatic joint is used for translational movement.  
>
> Also there is a difference in their **DoF (Degree of freedoms)** for example revolute joint and prismatic joint have **1 DoF** and **Motor enabled joints** while spherical joint have **3 Dof** and **doesn't** support **motor enable**.
>
> 

## Force sensor

Now after completing joints we will see  working and properties of  **Force sensor** 

Why we need force sensor? so to provide a **rigid link** between two bodies we need a Force sensor.

1. suppose what if we want to join shape_1 and shape_2 and we don't want any motion between them. Here comes the role of a Force sensor.
2. Do the same as we did in joints section i.e. add two cuboids one of height(z) 0.5m and other of length(x or y) 0.5m and rename them as shape_1 and shape_2 respectively.
3. Now make a T-shape structure by translating shape_2 on shape_1 ,remember that shape_1 should be set as static (uncheck body is dynamic) refer tutorial on **Object properties**
4. Add a Force sensor by clicking on **add** button present in **menu bar** and then click on Force sensor and must be translated to point where we want rigid link refer figure 2.
5. You can change properties such as **size of object and trigger settings** by double click on icon in front of force sensor in scene hierarchy. 
6. In **trigger settings** we can limit force after which the link will break between two bodies, **You need not to change trigger settings for normal operations (use default).**.
7. Make a hierarchy by adding **Force sensor** as a child of shape_1 and shape_2 as a child of **Force sensor**. You can make parent child relation by drag and drop in scene hierarchy.
8. After making  parent child relation run simulation and you will see shape_2 will not fall as it is linked to shape_1.

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.6-Joints%20and%20Force%20Sensor/Transcript/LeD_1.6_Transcript_%20Figure_2.gif)

​                                                                    *Figure 2: Force sensor demonstration*

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------