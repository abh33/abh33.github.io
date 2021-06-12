## LbD 1.2 - Assignment_1

- In this Assignment ,We will make a Simple **Windmill** with different primitive shapes and sensors. 
- You will learn how to add primitive shapes and how to change their dimensions, orientation etc.
- You will learn different properties such as body is dynamic, respondable masking , target velocity etc
- You will also learn concept of grouping two or more bodies together.

## Instructions

![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LbD%201.2-Windmill/LbD_1.2_Figure_1.JPG)

​                                                                             *Figure 1: Windmill_respondable*

|      Name       |   x (m)    |   y (m)    |   z (m)    | dynamic/static |
| :-------------: | :--------: | :--------: | :--------: | :------------: |
|      base       | 8.0000e-01 | 8.0000e-01 | 1.0000e-01 |     static     |
|      tower      | 1.3333e-01 | 1.3333e-01 | 2.0000e+00 |    dynamic     |
|     nacelle     | 1.0000e-01 | 3.0000e-01 | 1.0000e-01 |    dynamic     |
| blades (single) | 1.0000e+00 | 7.0000e-02 | 1.0000e-02 |    dynamic     |

​                                                                            *Table 1: Dimension / properties table*

>**Note:** **x and y** position coordinates of `base` , `tower` ,`nacelle` should be **(0 ,0)** . You can check in **object/item shift** from toolbar menu

1. **Strictly** follow the **naming conventions** and dimensions that we provide for the **Windmill_respondable**. refer Figure 1 and Table 1. 
2. Parts marked with **red** color are either **joints or hidden sensors** i.e. `force_sensor_bt ,force_sensor_tn` here `force_sensor_bt` indicates **force sensor** between `base and tower` and so on.
3. `generator` is a **revolute joint** in **motor enabled** mode.
4. Create a **scene hierarchy** for the given structure by using different **primitive shapes , sensors and joints **as shown in Figure 1.Make sure you make `base` as a **universal parent** i.e. all other parts comes under base in scene hierarchy.
5. All **primitive shapes** should be set as **Dynamic** except `base` i.e. `base` should be **static**.
6. All **primitive shapes** that you add should be checked as **respondable**.
7. If windmill structure is **not stable** or vibrations are there after running simulation then check there should be **no overlapping** between two **respondable bodies.**
8. One part made by **grouping** more than one shape/body **i.e.** `blades` 

## A. Getting started

- Copy-Paste the following **three** files (**`sim.py`**, **`simConst.py`** and **`remoteApi.so`** / **`remoteApi.dll`**) in the directory where you downloaded **`evaluation_script.py`** . The directory paths where these three files reside are given.

  - **`sim.py`** and **`simConst.py`**
    - Ubuntu OS - **`CoppeliaSim_Edu_V4_0_0_Ubuntu18_04/programming/remoteApiBindings/python/python`**
    - Windows OS - **`C:\Program Files\CoppeliaRobotics\CoppeliaSimEdu\programming\remoteApiBindings\python\python`**
  - **`remoteApi.so`** (for **Ubuntu OS**) *OR* **`remoteApi.dll`** (for **Windows OS**)
    - Ubuntu OS: **`CoppeliaSim_Edu_V4_0_0_Ubuntu18_04/programming/remoteApiBindings/lib/lib/Ubuntu18_04`**
    - Windows OS: **`C:\Program Files\CoppeliaRobotics\CoppeliaSimEdu\programming\remoteApiBindings\lib\lib\Windows`**

- Also copy paste the scene file you created i.e. **windmill_respondable.ttt**.

- With this, the directory will have these **five** files at one location:

  - **`evaluation_script.py`**
  - **`sim.py`**
  - **`simConst.py`**
  - **`remoteApi.so`** OR **`remoteApi.dll`**
  - **`windmill_respondable.ttt`**

  Re-check the directory and make sure these files are present.

  **Note:** While working with CoppeliaSim Remote API Server, it is mandatory to have these **three** files in the same directory.

  - **`sim.py`**
  - **`simConst.py`**
  - **`remoteApi.so`** OR **`remoteApi.dll`**

- Open the CoppeliaSim software:

  - Ubuntu OS

    - Open **Terminal** (shortcut - `Ctrl+Alt+T`) and navigate to the directory where the CoppeliaSim software was extracted, for example, **`~/Downloads/CoppeliaSim_Edu_V4_0_0_Ubuntu18_04`**.

    - Run the below command in Terminal to launch CoppeliaSim.

      ```bash
      ./coppeliaSim.sh
      ```

  - Windows OS - Double-click the shortcut icon on Desktop to launch CoppeliaSim.

- Make sure the CoppeliaSim software is open with the **windmill_respondable model** loaded into the scene.

- Now, you are all set to proceed further!



------

## B. Running Evaluation

- Open new **Terminal** (on Ubuntu OS) or **Anaconda Prompt** (on Windows OS) and navigate to the directory where the above **five** files are present.

- Run the **`evaluation_script.py`** file with command: **`python evaluation_script.py`** to run evaluation.
  - Then, the evaluation file will initiate and try to connect the *CoppeliaSim Remote API Server*. This requires the CoppeliaSim software running with the **windmill_respondable** model loaded into the scene.
  
  - Once connected, you will get the message: **Connected successfully to Remote API Server in CoppeliaSim!**
  
  - If your **scene hierarchy, position, naming convention, dimensions** are fine, you will get the message: **Evaluation completed successfully ! **
  
  - With this message, a text file **`output.txt`** will be generated in the same directory. This file contains data in an encoded format. It is suggested to **not play or modify** this file, else your **assignment_1** will fail during the automatic evaluation. Also, **do not rename** the file.
  
  - You will see output similar to one shown in Figure 2.![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LbD%201.2-Windmill/LbD_1.2_Figure_2.png)
  
    ​                                                  *Figure 2: Evaluation Successful Message*
  
  - If there is any problem with naming, scene hierarchy or positioning, you will get warning messages.
  
  - You can see a sample message in Figure 3 when the naming convention is not correct.![](https://raw.githubusercontent.com/abh33/CoppeliaSim_MOOC_Assets/master/Module_1/LbD%201.2-Windmill/LbD_1.2_Figure_3.png)
  
    ​                                             *Figure 3: Naming Convention Warning Message.*

​            

​            

​           

​                                    





