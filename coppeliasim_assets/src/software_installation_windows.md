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
    <h1>Software Installation (for Windows OS)</h1>
</center>



--------------

</br>

This document contains instructions to install following software/libraries on **Windows OS**:

- **Miniconda for Python 3.8**
- **OpenCV**
- **NumPy**
- **Matplotlib**
- **Jupyter Notebook, JupyterLab**
- **CoppeliaSim 4.0.0**
- **VS Code** *(optional but highly recommended)*

> The installation of all software/libraries has been tested on **Windows 8** and **10**. We recommend you to use one of these versions of **Windows OS**. These software have to be installed **ONLY ON 64-bit OS**.

<!-- toc -->

<br/>

-----

## 1. Miniconda for Python 3.8

- In this section, we will be installing Miniconda and use it to create a Python 3.8 virtual environment in next section.

- We will be using **Python 3.8** in this theme. You don't have to install Python separately. It comes by default with Miniconda installation.

- Conda is a package management system, created specifically to assist working with Python packages in a cross-platform fashion. Conda also has the concept of a virtual environment, which is an independent, self-contained install of Python and packages.

- There are two options for getting Conda: Anaconda and Miniconda. You can read in detail about these and which one to prefer, over here: <a href="https://towardsdatascience.com/get-your-computer-ready-for-machine-learning-how-what-and-why-you-should-use-anaconda-miniconda-d213444f36d6" target="_blank">reference1</a> and <a href="https://stackoverflow.com/questions/45421163/anaconda-vs-miniconda" target="_blank">reference2</a>.

  **Note:** If you already have Anaconda or Miniconda pre-installed in your system, kindly skip this section.



### A. Installation Steps

- Download Miniconda for Python 3.8 from <a href="https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe" target="_blank">here</a> (*file size - 55.7MB*).

- Navigate to the downloaded `.exe`file and double-click it. You would be greeted with a screen as shown in Figure 1.

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/1_Miniconda_Windows_Installer_Start.png"/></center>

  <center>Figure 1: Miniconda Windows Installer Start</center>

- Click on **I Agree** to accept the terms of agreement.

- It is best and recommended to install Miniconda for the local user, which does not require administrator permissions and is the most robust type of installation. Thus, leave the default **Just Me** selected and click **Next**.

- Leave the destination folder to install Miniconda untouched. **Note:** If the directory path contains any spaces, it will throw a Warning ! saying that the directory name should no contain spaces but that's okay, click OK.

- At this point, as shown in Figure 2, you have two important options:

  - **First:** You can optionally add Miniconda to your PATH environment variable, if you want to access Miniconda through the Windows Command Prompt. We recommend **not adding** it, since this can interfere with other software.

  - **Second:** You can register Miniconda as your default Python 3.8 and hence will be detected by other IDEs and tools. We recommend to **accept** this default check to register Miniconda, unless you plan on installing and running multiple versions of Miniconda or Anaconda.

    <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/2_Miniconda_Advanced_Installation_Options.png"/></center>

    <center>Figure 2: Miniconda Advanced Installation Options</center>
  
- Click on **Install**. Now sit back with ease as the installation process will take some time. Click **Next** when the installation completes. Skip the optional installation of Microsoft Visual Studio Code by clicking Skip, as we will install it manually later.

- Un-check the two boxes as shown in Figure 3 and click **Finish**.

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/3_Miniconda_Installation_Complete.png"/></center>

  <center>Figure 3: Miniconda Installation Complete</center>

- Cheers, **Miniconda for Python 3.8** is successfully installed. Let's verify now.



### B. Verification Steps

- Search for **Anaconda Prompt (miniconda3)** in Start menu. Open it.

- Type the following command in the prompt which has popped up.

  ```shell
  conda info
  ```
  
  You will get the information on Miniconda as in Figure 4.
  
  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/4_Output_of_conda_info_command.png"/></center>
  
  <center>Figure 4: Output of conda info command</center>
  
- Miniconda creates a default Python environment named ***base*** at the installation directory, let's check this out. Type **one of the following three** commands to find all the existing virtual environments on your system with their path location:

  ```bash
  conda env list
  ```

  OR

  ```shell
  conda info --envs
  ```

  OR

  ```shell
  conda info -e
  ```

  Since for now we just have one default environment **base** existing, there is one entry in Figure 5. The ***asterisk*** sign " * ", against the name indicates the current active environment, so it is ***base*** in this case.

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/5_Output_of_conda_env_list_command.png"/></center>

  <center>Figure 5: Output of conda env list command</center>

- When any environment is activated, its name appears in round braces **(env_name)** before the prompt. As in previous step, the **(base)** appears at the start of the prompt.

- To activate the default Python environment that comes with Miniconda installation, type in following in sequence:

  ```shell
  conda activate base
  where python
  python
  ```

  You will see output similar to Figure 6. What we did here is, first we invoked the default environment, then checked whether the prompt is able to detect the path of Python that came installed with Miniconda and at last we called the Python interpreter or console, you can see the very first message has Anaconda word which justifies it.

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/6_Output_of_where_python_and_python.png"/></center>

  <center>Figure 6: Output of where python and python</center>

- The Python version (***3.8.3***) might be different at your end but that's okay as long as it is ***3.8.x***. Type **`exit()`** to come out of Python console.

- Just as we use the command: **`conda activate env_name`** to activate the Python environment named **env_name**; to deactivate any active environment, type: **`conda deactivate`**. The **(env_name)** will now disappear from the start of prompt.

  ```shell
  conda deactivate
  ```



<br/>

---

## 2. OpenCV, NumPy, Matplotlib, Jupyter Notebook, JupyterLab

- In this section, let's create a virtual environment of **Python 3.8** with all the necessary packages.
- We will then see how to use these packages or tools in brief.



### A. Setting up a Virtual Environment using Miniconda

- The necessary packages or libraries, tools are encapsulated into the **environment.yml** file which can be downloaded from <b><a href="./task0_files/environment.yml" target="_blank">here</a></b> (*file size - 174 bytes*). Right-click on the hyperlink and select **Save Link As...** option to download.

- In the Miniconda Prompt, navigate to the folder where the **environment.yml** file is downloaded. Create a new environment of the name **`NB_<Team-ID>`** by typing the command:

  ```shell
  conda env create --name NB_<Team-ID> -f environment.yml
  ```

  Replace **`<Team-ID>`** with your ***Team ID***. **Note:** There should be no space in the environment name.

- For instance, if your Team ID is ***9999***, type:

  ```shell
  conda env create --name NB_9999 -f environment.yml
  ```
  
  You will see the output similar to Figure 7.
  
  **Note:** Make sure you have good Internet connection while running this command, as it downloads and installs all packages listed in the environment.yml file.
  
  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/7_Output_of_conda_env_create.png"></center>
  
  <center>Figure 7: Output of conda env create</center>



### B. Verifying the newly created Virtual Environment

- Let's verify the previous step. Type: **`conda env list`** now and you should now expect the environment name **`NB_<Team-ID>`** listed in the output as in Figure 8.

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/8_Output_of_conda_env_list_after_environment_creation.png"></center>

  <center>Figure 8: Output of conda env list after environment creation</center>

- The **environment.yml** file used to setup the virtual environment has following packages, tools encapsulated:

  - **OpenCV**, **NumPy**, **Matplotlib** - these packages are useful for Image Processing, Array manipulations and Plotting.
  - **Jupyter Notebook, JupyterLab** - these tools extend the console-based approach to interactive computing, providing a web-based application suitable for developing, documenting and executing code, as well as communicating the results.

- You can find more commands and know how to install a new package inside the environment, clone the environment, etc. in the <b><a href="https://docs.conda.io/projects/conda/en/latest/_downloads/843d9e0198f2a193a3484886fa28163c/conda-cheatsheet.pdf" target="_blank">Conda Cheat Sheet</a></b>.



### C. Using the packages and tools

- **OpenCV**, **NumPy**, **Matplotlib**

  - Activate the environment **`NB_9999`** in Anaconda Prompt, and invoke the Python interpreter.

  - Enter the following commands:

    ```shell
    conda activate NB_9999
    python
    ```

    ```python
    import cv2
    cv2.__version__
    import numpy
    numpy.__version__
    import matplotlib
    matplotlib.__version__
    exit()
    ```
    
  - You will get the version numbers of each package in the outptut as shown in Figure 9. The version numbers of some packages at your end **maybe** different.
  
- Once you get the similar results, exit the Python interpreter by typing **`exit()`**.
  
  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/9_Output_of_version_numbers_of_Python_NumPy_Matplotlib.png"></center>
  
  <center>Figure 9: Output of version numbers of Python, NumPy, Matplotlib</center>
  
- **Jupyter Notebook, JupyterLab**

  - Make sure the environment **`NB_9999`** is activated before you proceed.

  - To ensure our Jupyter Notebook has access to the newly created Virtual Environment, we need to execute the following:

    ```shell
    python -m ipykernel install --user --name=NB_9999
    ```

  - Now let's make sure our new environment is accessible through Jupyter Notebook.

  - Launch the **Jupyter Notebook** with the command:

    ```shell
    jupyter-notebook
    ```
  
    OR
  
    ```shell
    jupyter notebook
    ```
  
    This will start the Notebook server and open a default web browser to the URL of the web application, which will be: **`http://127.0.0.1:8888`** OR **`http://localhost:8888`** as below in Figure 10.
  
    <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/10_Output_of_jupyter_notebook_with_ipykernel.png"></center>
  
    <center>Figure 10: Output of jupyter notebook</center>
  
  - The landing page of the Jupyter Notebook, the **dashboard** shows the **IPython Notebooks** (**.ipynb**) currently available in the directory from where the notebook server was started.
  
  - In the top-right, under the **New** dropdown, you will be able to see your newly created environment as shown in Figure 11.
  
    <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/11_Jupyter_Notebook_able_to_detect_the_new_environment.png"></center>
  
    <center>Figure 11: Jupyter Notebook able to detect the new environment</center>
  
  - Launch the **JupyterLab** using the below command with your conda environment activated.
  
    ```shell
    jupyter-lab
    ```
  
    OR
  
    ```shell
    jupyter lab
    ```
  
  - JupyterLab will open automatically in your browser just like the **Jupyter Notebook**. This will start the Notebook server and open a default web browser to the URL of the web application, which will be: **`http://127.0.0.1:8888`** OR **`http://localhost:8888`** as below in Figure 12a and 12b.
  
    <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/12a_Output_of_jupyter_lab.png"></center>
  
    <center>Figure 12a: Output of jupyter lab</center>
  
    <br/>
  
    >The **warning message**: *Could not determine jupyterlab build status without nodejs* can be ignored.
  
    <br/>
    
    <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/12b_Jupyter_Lab_able_to_detect_the_new_environment.png"></center>
    
    <center>Figure 12b: Jupyter Lab able to detect the new environment</center>
  
  <br/>
  
  **Note:** Get acquainted yourself with the UI of Jupyter Notebook dashboard, how to create markdown and code cells and run them, keyboard shortcuts, etc. from the <a href="https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Notebook%20Basics.html" target="_blank">official documentation</a>.
  
  **Voila!** Your new Virtual Environment is setup successfully without any errors!

<br/>

---

## 3. CoppeliaSim 4.0.0

- In this section, we will install CoppeliaSim Robotics Simulator Platform.
- The robot simulator CoppeliaSim is based on a distributed control architecture: each object/model can be individually controlled via an embedded script, a plugin, a ROS or BlueZero node, a remote API client, or a custom solution. This makes CoppeliaSim very versatile and ideal for multi-robot applications. Controllers can be written in C/C++, Python, Java, Lua, Matlab or Octave.
- CoppeliaSim is used for fast algorithm development, factory automation simulations, fast prototyping and verification, robotics related education, remote monitoring, safety double-checking, as digital twin, and much more. You can find a feature overview <a href="https://www.coppeliarobotics.com/features" target="_blank">here</a>.
- It can be used as a stand-alone application or can easily be embedded into a main client application: its small footprint and elaborate API makes CoppeliaSim an ideal candidate to embed into higher-level applications.



### A. Installation Steps

- Download **CoppeliaSim Edu 4.0.0** for **Windows 64-bit OS** from <a href="https://www.coppeliarobotics.com/files/CoppeliaSim_Edu_V4_0_0_Setup.exe" target=_blank>here</a> (*file size - 161MB*).

- Navigate to the downloaded `.exe`file and double-click it to install the software.

- Once the installation is complete, a shortcut icon to launch the software would have been created on your Desktop. Double-click to launch it. CoppeliaSim will open as shown in Figure 13 with the default scene loaded.

  <center><img src="https://raw.githubusercontent.com/kalindkaria/typora-md-assets/master/maze_bot/assets/task_0/sw_install/windows/13_CoppeliaSim_first_launch.png"></center>

  <center>Figure 13: CoppeliaSim software launch</center>

<br/>

---

## 4. Visual Studio Code *(optional but hightly recommended)*

- The below steps will increase your programming efficiency.
- Programmers spend a lot of time looking at documentation, re-factoring code, debugging issues, unit testing and styling code.
- What if you get a helping hand at this so that your code looks beautiful and you could debug issues faster? Read further to know more. Don't worry!
- Since using tooling may be a new thing to most of you it may look difficult but none of this is difficult. It's actually rather very very easy and you will become a better programmer the earlier you master these tools.
  - Download a Text Editor. We recommend <b><a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code</a></b> (*file size - 61.1MB*).
  - If you write a code in Jupyter Notebook and wish to reuse it written, you will have to move the code in a **.py** file and then just use the file in **VS Code**.
  - When writing a Python program with IDLE you miss out on a lot of things, like auto-complete suggestions, auto-indentation, inline documentation for module/function, aesthetics, etc.
  - For efficacy reasons, we will use a good text editor like **VS Code**.
  - Set up **VS Code** for **Python**.
    - Install the Python Extension in VS Code: <a href="https://code.visualstudio.com/docs/python/python-tutorial#_install-visual-studio-code-and-the-python-extension" target="_blank">link</a>. This will setup all the tools necessary for easy editing, running and testing Python programs.
    - Select a Python Interpreter: <a href="https://code.visualstudio.com/docs/python/python-tutorial#_select-a-python-interpreter" target="_blank">link</a>. This will tell the Python IntelliSense which interpreter to use while you write, run and test your Python programs. It will also detect the virtual environments created by Miniconda and let you choose and switch between them. So, you will select the environment **`NB_<Team-ID>`** in this case.
  - Other than auto-completion, inline documentation, etc. **VS Code** also <a href="https://code.visualstudio.com/docs/python/linting" target="_blank">lints your code</a>, helps you <a href="https://code.visualstudio.com/docs/python/debugging" target="_blank">debug</a> your code very easily (so you can avoid print statements).

<br/>

---

## 5. Testing the Setup

In order to verify and test the successful installation of above software and libraries, follow the steps provided in [Test_Setup](./test_setup.html) document.

<br/>

---

 ## References

1. <a href="https://towardsdatascience.com/get-your-computer-ready-for-machine-learning-how-what-and-why-you-should-use-anaconda-miniconda-d213444f36d6" target="_blank">How, What and Why you should use Anaconda Miniconda?</a>
2. <a href="https://stackoverflow.com/questions/45421163/anaconda-vs-miniconda" target="_blank">Anaconda vs Miniconda - StackOverflow answer</a>
3. <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/cheatsheet.html" target="_blank">Conda Cheat Sheet</a>
4. <a href="https://jupyterlab.readthedocs.io/en/stable/index.html" target="_blank">JupyterLab Documentation</a>
5. <a href="https://jupyter-notebook.readthedocs.io/en/latest/notebook.html" target="_blank">Jupyter Notebook Documentation</a>
6. <a href="https://www.coppeliarobotics.com/" target="_blank">Coppelia Robotics</a>
7. <a href="https://www.coppeliarobotics.com/helpFiles/index.html" target="_blank">CoppeliaSim User Manual</a>
8. <a href="https://code.visualstudio.com/docs/python/python-tutorial" target="_blank">Getting Started with Python in VS Code</a>

<br/>

---

