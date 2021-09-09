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

## Joints in CoppeliaSim 

A joint is an object that has at least one intrinsic Degree of Freedom (DoF). Joints are used to build mechanisms and to move objects i.e. a joint is used where we have to show motion of a body.

There are **Three** joints in CoppeliaSim:

- **Revolute joints**: revolute joints have **one** DoF and can be used for *rotational movement*  as **passive joints**, or as **active joints (motors)**.
- **Prismatic joints**: prismatic joints have **one** DoF and can be used for *translational movement* as **passive joints**, or as **active joints (motors)**.
- **Spherical joints**: spherical joints have **three** DoF and they are always used for *rotational movement*  as  **passive joints**, and **cannot** act as **motors**.

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.6-Joints%20and%20Force%20Sensor/Tutorial/LeD_1.6_%20Figure_1.JPG)

​																   *Figure 1: revolute joint, prismatic joint, spherical joint*

- Joints are added to the **scene** with `menu bar --> Add --> Joint`.
- Visual properties like **length, diameter**  can be changed by double clicking on the icon. refer *Figure 2*.

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.6-Joints%20and%20Force%20Sensor/Tutorial/LeD_1.6_%20Figure_2.gif)

​                                                                                         *Figure 2: Adding a revolute joint*

`Dynamic properties of a Joint`

- **Motor enabled**: it allow us to **enable or disable** the motor of the joint. If disabled, the joint is free and acts as a free link between two bodies. 

- **Target velocity**: It is the **velocity** of the joint motor. The target velocity will be instantaneously reached if the maximum torque/force is high enough; otherwise the target velocity is gradually approached. refer Figure 3

- **Max. torque/force**: the maximum torque or force at which the joint motor operates.
- **Control loop enabled**: It **enables or disables** the joint control loop. By default, a built-in PID controller is used ( you will learn in upcoming modules).

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.6-Joints%20and%20Force%20Sensor/Tutorial/LeD_1.6_%20Figure_3.gif)

​    																				*Figure 3: Dynamic properties of revolute joint*



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Force sensor 

Force sensors are used to provide a **rigid link** between two bodies. They can be added to the scene with `Menu bar --> Add --> Force sensor` . For more refer [Here](https://www.coppeliarobotics.com/helpFiles/index.html)

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LeD%201.6-Joints%20and%20Force%20Sensor/Tutorial/LeD_1.6_%20Figure_4.gif)

​                                                                             *Figure 4: Adding force sensor*

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**References**

1. [CoppeliaSim robotics](https://www.coppeliarobotics.com/helpFiles/index.html)

