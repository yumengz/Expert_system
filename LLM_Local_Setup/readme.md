# DeepSeek 本地搭建指南

## 项目概述

本指南帮助你在本地搭建 DeepSeek 模型，DeepSeek 是一种大语言模型，可以用于各种自然语言处理任务。在本地搭建后，你可以与 DeepSeek 进行交互，为专家系统提供强大的语言理解和生成能力。

## 安装步骤

### 1. 安装 Homebrew（如果尚未安装）

Homebrew 是一个 MacOS 的包管理工具，如果你尚未安装 Homebrew，可以通过以下命令进行安装：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


安装完成后，确保 Homebrew 已经添加到你的环境变量中，执行以下命令来确认：

```bash
brew --version
```
如果返回版本号，则说明 Homebrew 已成功安装并配置。

### 2. 安装 Ollama
Ollama 是一个用于运行和管理大语言模型的工具。使用以下命令通过 Homebrew 安装 Ollama：

```bash
brew install ollama

ollama start
```
### 3. 运行 DeepSeek 模型
DeepSeek 模型的 URL 为 https://ollama.com/library/deepseek-r1:8b，使用 Ollama 启动该模型，运行以下命令：

```bash
ollama run deepseek-r1:8b
```
运行此命令后，Ollama 将会从模型库下载并启动 deepseek-r1:8b 模型。

### 4. 验证模型是否成功启动
一旦模型成功启动，你可以通过以下命令验证模型是否在本地正常运行：

```bash
ollama list
```
如果模型成功启动，你应该能在列出的模型中看到 deepseek-r1:8b。

### 5. 测试 DeepSeek 模型
为了验证 DeepSeek 模型是否能够正常工作，你可以使用简单的输入进行测试。例如，运行以下命令与模型进行交互：

```bash
ollama run deepseek-r1:8b 
```