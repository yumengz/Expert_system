用docker app安装k8s
Settings => Kubernetes => enable => reset => apply and restart

kubectl get nodes

==> 长球这样
(base) Wenqings-MacBook-Pro:open-webui wenqings$ kubectl get nodes
NAME             STATUS   ROLES           AGE   VERSION
docker-desktop   Ready    control-plane   29s   v1.30.5

==> 搞不定的话，删球这里面的文件， 再在docker app里重装k8s
~/.kube/config

brew install kustomize  # macOS
kustomize version
我电脑长球这样
==> v5.6.0

### Installing Both Ollama and Open WebUI Using Kustomize

For cpu-only pod

```bash
官方指南：
kubectl apply -f ./kubernetes/manifest/base
行不通，去掉validation
kubectl apply -f ./kubernetes/manifest/base --validate=false
以上两个都行不通，试试这个
kubectl apply -k ./kubernetes/manifest/base --validate=false

Why?
-f applies raw YAML files, while -k is required for kustomization.yaml.

Check the Pods， Make sure all pods are in the Running or Ready state. ：
kubectl get pods -n open-webui
==>
(base) Wenqings-MacBook-Pro:open-webui wenqings$ kubectl get pods -n open-webui
NAME                                     READY   STATUS    RESTARTS   AGE
ollama-0                                 1/1     Running   0          17m
open-webui-deployment-86bf9df567-2wqzs   1/1     Running   0          18m


Check the Services
kubectl get svc -n open-webui

(base) Wenqings-MacBook-Pro:open-webui wenqings$ kubectl get svc -n open-webui
NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
ollama-service       ClusterIP   10.110.13.17    <none>        11434/TCP        19m
open-webui-service   NodePort    10.106.144.57   <none>        8080:31817/TCP   20m

Look for the open-webui-service and ollama-service. If they are using ClusterIP, you may need to expose them.

To expose Open WebUI locally using a port forward:
kubectl port-forward -n open-webui service/open-webui-service 6666:8080

(base) Wenqings-MacBook-Pro:open-webui wenqings$ kubectl port-forward -n open-webui service/open-webui-service 6666:8080
Forwarding from 127.0.0.1:6666 -> 8080
Forwarding from [::1]:6666 -> 8080

Now, you should be able to access Open WebUI at: http://localhost:6666 ==> Not work

Everything looks good in your Kubernetes setup—both your pods are running, and your service is exposing port 8080 via NodePort (31817). However, since the service type is NodePort, your port-forwarding might not be necessary.
这玩意成功了：
http://localhost:31817/

还有什么不懂的，问chatgpt吧。。。 
该项目基于yaml file部署于k8s， 可以通过以上方法本地部署，将来直接利用tekton啥的部署于云端k8s


```

For gpu-enabled pod

```bash
kubectl apply -k ./kubernetes/manifest
```

### Installing Both Ollama and Open WebUI Using Helm

Package Helm file first

```bash
helm package ./kubernetes/helm/
```

For cpu-only pod

```bash
helm install ollama-webui ./ollama-webui-*.tgz
```

For gpu-enabled pod

```bash
helm install ollama-webui ./ollama-webui-*.tgz --set ollama.resources.limits.nvidia.com/gpu="1"
```

Check the `kubernetes/helm/values.yaml` file to know which parameters are available for customization
