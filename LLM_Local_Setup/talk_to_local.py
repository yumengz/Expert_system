import subprocess

def query_deepseek(query):
    try:
        # 使用 subprocess 启动 Ollama，并向模型传递输入
        result = subprocess.run(
            ["ollama", "run", "deepseek-r1:1.5b"],  # 运行模型
            input=query,  # 传递用户输入
            capture_output=True,  # 捕获标准输出
            text=True,  # 将输出转换为字符串
            check=True  # 如果命令失败则抛出异常
        )
        
        # 返回模型的响应
        return result.stdout
        
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        print("Error Output:", e.stderr)
        return None

def interactive_chat():
    print("你好！我可以帮助你。输入 'exit' 结束对话。")
    
    while True:
        user_input = input("你：")  # 获取用户输入
        if user_input.lower() == "exit":
            print("结束对话。再见！")
            break
        
        # 发送用户输入并获取模型的响应
        response = query_deepseek(user_input)
        
        if response:
            print("DeepSeek:", response)
        else:
            print("没有收到有效的响应，尝试重新提问。")

if __name__ == "__main__":
    interactive_chat()
