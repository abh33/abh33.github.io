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

<center>
    <h1>Task 0</h1>
    <h1>Test the Setup</h1>
</center>



---

</br>

This document contains instructions to test the installation of Mincionda virtual Python environment, libraries and CoppeliaSim Robotics Simulator Platform.

Download the following files necessary to test the setup. Right-click on the hyperlinks and select **Save Link As...** option to download.

- <b><a href="./task0_files/test_task0.py" target="_blank">test_task0.py</a></b>
- <b><a href="./task0_files/task0_cardinal.pyc" target="_blank">task0_cardinal.pyc</a></b>
- <b><a href="./task0_files/Differential_Drive_Robot.ttm" target="_blank">Differential_Drive_Robot.ttm</a></b>

> **Note:** For **`task0_cardinal.pyc`**, the browser might warn that the file can harm your PC, but it will not and you can safely download it.

Now, follow the steps below for successful testing of the setup.

<!-- toc -->

<br/>

---

## A. Getting Started

- Move or Cut-Paste the downloaded **Differential_Drive_Robot.ttm** file to the following directory location where **CoppeliaSim** software resides:

  - <u>Ubuntu OS</u> - **`CoppeliaSim_Edu_V4_0_0_Ubuntu18_04/models/robots/mobile/`**

    

  - <u>Windows OS</u> - **`C:\Program Files\CoppeliaRobotics\CoppeliaSimEdu\models\robots\mobile\`**

- Open a file **remoteApiConnections.txt** located at the following location:

  - <u>Ubuntu OS</u> - **`CoppeliaSim_Edu_V4_0_0_Ubuntu18_04/remoteApiConnections.txt`**

    

  - <u>Windows OS</u> - **`C:\Program Files\CoppeliaRobotics\CoppeliaSimEdu\remoteApiConnections.txt`**

- The **remoteApiConnections.txt** file will have following lines as given below:

  ```c
  // Let's start a continuous remote API server service on port 19997:
  portIndex1_port             = 19997
  portIndex1_debug            = false
  portIndex1_syncSimTrigger   = true
  
  ```

- Make sure the value of parameter **`portIndex1_port`** is **19997**. If its some other value, then update it to **19997**.

- This is the port number through which the **`test_task0.py`** file will initiate the communication with Remote API Server of CoppeliaSim software.

  > **Note:** Do not make any change to this file apart from updating the **`portIndex1_port`**.<br/>**Warning:** If you are making any change to this **remoteApiConnections.txt** file with the CoppeliaSim software launched or running, you need to close and launch the software again for the changes to take effect.

- Copy-Paste the following **three** files (**`sim.py`**, **`simConst.py`** and **`remoteApi.so`** / **`remoteApi.dll`**) in the directory where you downloaded **`test_task0.py`** and **`task0_cardinal.pyc`** before. The directory paths where these three files reside are given.

  - **`sim.py`** and **`simConst.py`**

    - <u>Ubuntu OS</u> - **`CoppeliaSim_Edu_V4_0_0_Ubuntu18_04/programming/remoteApiBindings/python/python`**

      

    - <u>Windows OS</u> - **`C:\Program Files\CoppeliaRobotics\CoppeliaSimEdu\programming\remoteApiBindings\python\python`**

    

  - **`remoteApi.so`** (for **Ubuntu OS**) *OR* **`remoteApi.dll`** (for **Windows OS**)

    - <u>Ubuntu OS</u>: **`CoppeliaSim_Edu_V4_0_0_Ubuntu18_04/programming/remoteApiBindings/lib/lib/Ubuntu18_04`**
    
      
    
    - <u>Windows OS</u>: **`C:\Program Files\CoppeliaRobotics\CoppeliaSimEdu\programming\remoteApiBindings\lib\lib\Windows`**

- With this, the directory will have these **five** files at one location:

  - **`test_task0.py`**
  - **`task0_cardinal.pyc`**
  - **`sim.py`**
  - **`simConst.py`**
  - **`remoteApi.so`** OR **`remoteApi.dll`** <br>

  Re-check the directory and make sure these files are present.

  **Note:** While working with CoppeliaSim Remote API Server, it is mandatory to have these **three** files in the same directory.

  - **`sim.py`**
  - **`simConst.py`**
  - **`remoteApi.so`** OR **`remoteApi.dll`**

- Open the CoppeliaSim software:

  - <u>Ubuntu OS</u>

    - Open **Terminal** (shortcut - `Ctrl+Alt+T`) and navigate to the directory where the CoppeliaSim software was extracted, for example, **`~/Downloads/CoppeliaSim_Edu_V4_0_0_Ubuntu18_04`**.

    - Run the below command in Terminal to launch CoppeliaSim.

      ```bash
      ./coppeliaSim.sh
      ```

  - <u>Windows OS</u> - Double-click the shortcut icon on Desktop to launch CoppeliaSim.

- A new default scene will load. Select **mobile** folder from the model browser as shown in Figure 1.

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/test_setup/1_Select_mobile_folder_in_model_browser.png"></center>

  <center>Figure 1: Select mobile folder in model browser</center>

- From the various models available, scroll down to select **Differential_Drive_Robot** model. Select and drag the model into the scene as in Figure 2.

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/test_setup/2_Loading_Diff_Drive_Robot_model_into_scene.png"></center>

  <center>Figure 2: Loading the Differential_Drive_Robot model into the scene</center>

- After loading the model, the scene will look as in Figure 3.

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/test_setup/3_Diff_Drive_Robot_model_loaded.png"></center>

  <center>Figure 3: Differential_Drive_Robot model loaded in the scene</center>

- Make sure the CoppeliaSim software is open with the Differential_Drive_Robot model loaded into the scene. You should get the message: **Model loaded.** in the Status bar in CoppeliaSim as in Figure 3.

- Now, you are all set to proceed further!

<br/>

---

## B. Testing Setup

- Open new **Terminal** (on Ubuntu OS) or **Anaconda Prompt** (on Windows OS) and navigate to the directory where the above **five** files are present.

- Activate the Conda environment **`NB_<Team-ID>`** with the command: **`conda activate NB_<Team-ID>`**.

- Run the **`test_task0.py`** file with command: **`python test_task0.py`** to test the setup.

- When asked, you have to enter your **Team ID**, such as **`9999`**.

- This test file performs its task in two steps:

  - **Step-1**

    - First it checks whether all the software / libraries are installed with their latest version. If everything is expected, you will get the message: **Cheers, All software/library are installed correctly in your environment!**

  - **Step-2**

    - Then, the test file will initiate and try to connect the *CoppeliaSim Remote API Server*. This requires the CoppeliaSim software running with the Differential_Drive_Robot model loaded into the scene.

    - Once connected, you will get the message: **Connected successfully to Remote API Server in CoppeliaSim!**

    - It will start the simulation and display a list of commands (in Terminal or Anaconda Prompt) to control the locomotion of Robot model in the scene as shown below.

      | Command to execute |  Character Input   |
      | :----------------: | :----------------: |
      |    Move Forward    | **`w`** OR **`W`** |
      |   Move Backward    | **`s`** OR **`S`** |
      |     Turn Left      | **`a`** OR **`A`** |
      |     Turn Right     | **`d`** OR **`D`** |
      |        Stop        | **`x`** OR **`X`** |
      |  Quit the program  | **`q`** OR **`Q`** |

      

    - The robot in CoppeliaSim's scene will simulate and execute the command given to it based on the char input provided.

    - You can test and check whether each locomotion command is executed correctly by observing the robot's motion in the CoppeliaSim's scene.

      > **Note:** If you only provide **`q`** OR **`Q`** as input, the program will stop and print the message:
      >
      > *Something went wrong. Robot locomotion commands weren't executed!*
      >
      > *Bye, see you! Run the program again.*
      >
      > It is necessary to input at least one locomotion command for the Test Setup to complete successfully.
  - Once **`q`** OR **`Q`** is provided as input, the program will stop the simulation, close the Remote API Server connection and stop its own execution or quit.

    - If the above process worked fine, you will get the message: **Voila, CoppeliaSim Remote API Server works seamlessly!**

    - With this message, a text file **`task0_output.txt`** will be generated in the same directory. This file contains data in an encoded format. It is suggested to **not play or modify** this file, else your **Task 0** will fail during the automatic evaluation. Also, **do not rename** the file.

    - You will see output similar to one shown as gif in Figure 4.

      <br/>

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/test_setup/4_Output_of_Task0_Test_Setup.gif"></center>

  <center>Figure 4: Output of Task 0 - Test Setup</center>
  
  <!-- <video autoplay="" controls="" width=730 height=400>
      <source src="./task0_files/task0_output_converted.gif">
    Your browser does not support video tag.
  </video> -->
  
  <!-- <video src="./task0_files/converted_video.mp4" /> -->

<br/>

---

## C. Submitting Task 0 - Test Setup Output

- For successful completion of **Task 0 - Test Setup**, upload the **`task0_output.txt`** file on the portal. Select **Browse** button to upload the file. From the dialog box, select the file and click **Open**.

- You shall see the file name **`task0_output.txt`** in text-box besides the **Upload** button as in Figure 5. Click on **Upload Task 0** button to submit the text file.

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/test_setup/5_Upload_task0_output_txt_on_portal.png"></center>
  
  <center>Figure 5: Upload task0_output.txt file on portal</center>

- Congrats, you have successfully completed Testing the Setup!



<br/>

---